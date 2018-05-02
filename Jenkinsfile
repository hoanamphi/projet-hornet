pipeline {
    agent {
        label "projet-hornet"
    }

    environment {
        // Projet
        MODULE_GROUP="fr.gouv.diplomatie.projet-hornet"
        MODULE_GROUP_PUB="fr/gouv/diplomatie/projet-hornet"
        MODULE_ID="projet-hornet"
        MODULE_APPLI="projet-hornet"

        BUILD_TIMESTAMP=sh(script: 'date +%Y%m%d%H%M%S', returnStdout:true).trim()
        VERSION_PACKAGE=sh(script:"npm run version --silent", returnStdout:true).trim()

        VERSION_RELEASE="${VERSION_PACKAGE}"
        VERSION_SNAPSHOT="${VERSION_RELEASE}-${BUILD_TIMESTAMP}-${BUILD_NUMBER}"

        // Construction
        HORNETJSBUILDER_VERSION="1.5.3"
        HORNETJSBUILDER_BASE="/var/lib/jenkins/.hbw/${HORNETJSBUILDER_VERSION}"

        // Publication
        ARTIFACTORY_URL = "http://[URL_ARTIFACTORY]/"
        REPOSITORY_GROUP="projet-hornet"
        REPOSITORY_SNAPSHOT = "${REPOSITORY_GROUP}-snapshot"
        REPOSITORY_RELEASE = "${REPOSITORY_GROUP}-release"
        REPOSITORY_NPM_SNAPSHOT = "${REPOSITORY_GROUP}-npm-snapshot"
        REPOSITORY_NPM_RELEASE = "${REPOSITORY_GROUP}-npm-release"

        // Déploiement
        RUNDECK_HOST=""
        RUNDECK_JOB_APPLI_SNAPSHOT_ID="${MODULE_GROUP}-${MODULE_APPLI}-DEVNG-SNAPSHOT-application-${MODULE_APPLI}-scheduled-install"
        RUNDECK_JOB_APPLI_RELEASE_ID="${MODULE_GROUP}-${MODULE_APPLI}-DEVNG-RELEASE-application-${MODULE_APPLI}-scheduled-install"
        RUNDECK_CREDENTIALS_KEY="projet-hornet_cd_at_rundeck01"

        // Qualité
        SONAR_HOST = "http://[URL_SONAR]/"
        SONAR_CREDENTIALS_KEY = "projet-hornet_cq_at_sonar01"
        SONAR_SCANNER_CLI = "3.0.3.778"

    }

    options {
        buildDiscarder(logRotator(artifactDaysToKeepStr: "20", artifactNumToKeepStr: "1", daysToKeepStr: "90", numToKeepStr: "20"))
        disableConcurrentBuilds()
    }

    stages {

        stage("Environment") {
            steps {
                echo sh(script: "env|sort", returnStdout: true)
            }
            post {
                success {
                    echo "[SUCCESS] Success to print Environment"
                }
                failure {
                    echo "[FAILURE] Failed to print Environment"
                }
            }
        }

        stage("Install Builder") {
            steps {
                withNPM(npmrcConfig: "npmrc_projet-hornet") {
                    sh '''
                        echo "Install hornet-js-builder@$HORNETJSBUILDER_VERSION"
                        echo "${HORNETJSBUILDER_VERSION}" > hb_version
                        bash hbw.sh --version
                       '''
                }
            }
            post {
                success {
                    echo "[SUCCESS] Success to install builder"
                }
                failure {
                    echo "[FAILURE] Failed to install builder"
                }
            }
        }

        stage("Handle Snaphot version") {
            when {
				anyOf {
	                branch "develop"
				}
            }
            steps {
                    sh '''
                        bash hbw.sh versions:set --versionFix=${VERSION_SNAPSHOT}
                    '''
            }
            post {
                success {
                    echo "[SUCCESS] Success to handle snapshot version"
                }
                failure {
                    echo "[FAILURE] Failed to handle snapshot version"
                }
            }
        }

        stage("Publish NPM snapshot") {
            when {
                branch "develop"
            }
            steps {
                sh "bash hbw.sh publish --publish-registry ${ARTIFACTORY_URL}/api/npm/${REPOSITORY_NPM_SNAPSHOT} --skipTests"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Publish snapshot"
                }
                failure {
                    echo "[FAILURE] Failed to Publish snapshot"
                }
            }
        }

        stage("Publish NPM release") {
            when {
                branch "master"
            }
            steps {
                sh "bash hbw.sh publish --publish-registry ${ARTIFACTORY_URL}/api/npm/${REPOSITORY_NPM_RELEASE} --skipTests"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Publish release"
                }
                failure {
                    echo "[FAILURE] Failed to Publish release"
                }
            }
        }

        stage("Publish snapshot") {
            when {
                anyOf {
                    branch "develop"
                }
            }
            steps {
                sh '''
                    echo "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>

<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>${MODULE_GROUP}</groupId>
    <artifactId>${MODULE_APPLI}</artifactId>
    <version>${VERSION_RELEASE}-SNAPSHOT</version>
</project>" > ./${MODULE_APPLI}/target/${MODULE_APPLI}-${VERSION_SNAPSHOT}.pom
                '''
                withCredentials([usernamePassword(credentialsId: "projet-hornet_ci_at_artifactory", passwordVariable: "pwd_ci", usernameVariable: "user_ci")]) {
                    script {
                        def artifactory = Artifactory.newServer url: "$ARTIFACTORY_URL", username: "$user_ci", password: "$pwd_ci"
                        def uploadSpec = """{
                            "files": [
                            {
                                "pattern": "./${MODULE_APPLI}/target/*.*",
                                "target": "${REPOSITORY_SNAPSHOT}/${MODULE_GROUP_PUB}/${MODULE_APPLI}/${VERSION_RELEASE}-SNAPSHOT/",
                                "recursive": false
                            }
                        ]
                        }"""
                        artifactory.upload(uploadSpec)
                    }
                }
                archiveArtifacts artifacts: "**/target/*", fingerprint: true
            }
            post {
                success {
                    echo "[SUCCESS] Success to Publish snapshot"
                }
                failure {
                    echo "[FAILURE] Failed to Publish snapshot"
                }
            }
        }

        stage("Publish release") {
            when {
                branch "master"
            }
            steps {
                sh '''
                    echo "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>${MODULE_GROUP}</groupId>
    <artifactId>${MODULE_APPLI}</artifactId>
    <version>${VERSION_RELEASE}</version>
</project>" > ./${MODULE_APPLI}/target/${MODULE_APPLI}-${VERSION_RELEASE}.pom
                '''
                withCredentials([usernamePassword(credentialsId: "projet-hornet_ci_at_artifactory", passwordVariable: "pwd_ci", usernameVariable: "user_ci")]) {
                    script {
                        def artifactory = Artifactory.newServer url: "$ARTIFACTORY_URL", username: "$user_ci", password: "$pwd_ci"
                        def uploadSpec = """{
                            "files": [
                            {
                                "pattern": "./${MODULE_APPLI}/target/*.*",
                                "target": "${REPOSITORY_RELEASE}/${MODULE_GROUP_PUB}/${MODULE_APPLI}/${VERSION_RELEASE}/",
                                "recursive": false
                            }
                        ]
                        }"""
                        artifactory.upload(uploadSpec)
                    }
                }
                archiveArtifacts artifacts: "**/target/*", fingerprint: true
            }
            post {
                success {
                    echo "[SUCCESS] Success to Publish release"
                }
                failure {
                    echo "[FAILURE] Failed to Publish release"
                }
            }
        }



        stage("Test") {
            steps {
                sh "bash hbw.sh test"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Test"
                }
                failure {
                    echo "[FAILURE] Failed to Test"
                }
            }
        }

        stage("Quality") {

            environment {
                SONAR_CREDENTIALS = credentials("${SONAR_CREDENTIALS_KEY}")
            }

            when {
                anyOf {
                    branch "develop"
                    branch "master"
                }
            }
            steps {
                script {
                  scannerHome = tool "SonarQube Scanner ${SONAR_SCANNER_CLI}"
                }

                sh '''
                    echo "
                    sonar.host.url=${SONAR_HOST}
                    sonar.login=${SONAR_CREDENTIALS_PSW}
                    sonar.projectKey=${MODULE_GROUP}:${MODULE_ID}
                    sonar.projectName=${MODULE_ID}
                    sonar.projectVersion=${VERSION_RELEASE}
                    sonar.sourceEncoding=UTF-8
                    sonar.sources=src
                    sonar.tests=test

                    sonar.modules="projet-hornet"

                    sonar.exclusions=**/node_modules/**,**/*.spec.ts
                    //sonar.tests=./test
                    //sonar.test.inclusions=**/*.spec.ts, **/*.test.karma.ts

                    sonar.cobertura.reportPath=**/test_report/merge/cobertura-coverage.xml
                    sonar.javascript.lcov.reportPath=**/test_report/merge/lcov/lcov.info

                    sonar.language=ts
                    sonar.baseDir=.
                    sonar.ts.tslint.projectPath=.
                    sonar.ts.tslint.path=${HORNETJSBUILDER_BASE}/node_modules/tslint/bin/tslint
                    sonar.ts.tslint.configPath=${HORNETJSBUILDER_BASE}/src/conf/tslint.json
                    sonar.ts.tslint.ruleConfigs=${HORNETJSBUILDER_BASE}/src/conf/tslint-rules.properties

                    sonar.typescript.lcov.reportPaths=**/test_report/merge/lcov/lcov.info

                    " > sonar-project.properties
                '''
               sh "${scannerHome}/bin/sonar-scanner"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Analyse Quality"
                }
                failure {
                    echo "[FAILURE] Failed to Analyse Quality"
                }
            }
        }

        stage("Deploy snapshot") {
            environment {
                RUNDECK_CREDENTIALS = credentials("${RUNDECK_CREDENTIALS_KEY}")
            }
            when {
                branch "develop"
            }
            steps {
                sh "node trigger-rundeck.js ${RUNDECK_HOST} ${RUNDECK_JOB_APPLI_SNAPSHOT_ID} ${RUNDECK_CREDENTIALS_PSW} ${VERSION_RELEASE}-SNAPSHOT"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Deploy snapshot"
                }
                failure {
                    echo "[FAILURE] Failed to Deploy snapshot"
                }
            }
        }

        stage("Deploy release") {
            environment {
                RUNDECK_CREDENTIALS = credentials("${RUNDECK_CREDENTIALS_KEY}")
            }
            when {
                branch "master"
            }
            steps {
                sh "node trigger-rundeck.js ${RUNDECK_HOST} ${RUNDECK_JOB_APPLI_RELEASE_ID} ${RUNDECK_CREDENTIALS_PSW} ${VERSION_RELEASE}"
            }
            post {
                success {
                    echo "[SUCCESS] Success to Deploy release"
                }
                failure {
                    echo "[FAILURE] Failed to Deploy release"
                }
            }
        }
    }
}