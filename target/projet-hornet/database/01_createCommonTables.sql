/* Tables communes aussi bien pour la partie FVM que MVF */

DROP TABLE IF EXISTS PREFECTURE CASCADE;
DROP TABLE IF EXISTS VALISE CASCADE;
DROP TABLE IF EXISTS ROLE CASCADE;
DROP TABLE IF EXISTS UTILISATEUR CASCADE;
DROP TABLE IF EXISTS ROLE_UTILISATEUR CASCADE;

CREATE TABLE PREFECTURE (
  ID_PREFECTURE SERIAL PRIMARY KEY
  , REGION TEXT NOT NULL
  , DEPARTEMENT TEXT NOT NULL
  , PREFECTURE TEXT UNIQUE NOT NULL
  , ADRESSE TEXT NOT NULL
  , CODE_POSTAL INTEGER NOT NULL
  , VILLE TEXT NOT NULL
);

CREATE TABLE VALISE (
  NUM_VALISE INTEGER PRIMARY KEY
  , DATE_VALISE DATE NOT NULL
);

CREATE TABLE UTILISATEUR (
    ID_UTILISATEUR SERIAL PRIMARY KEY
    , UTI_LOGIN VARCHAR(10) NOT NULL
    , UTI_PASSWORD VARCHAR(40) NOT NULL
    , UTI_ENABLED BOOLEAN DEFAULT FALSE NOT NULL );

CREATE TABLE ROLE (
    ID_ROLE SERIAL PRIMARY KEY
    , ROL_NOM VARCHAR(30) NOT NULL);

CREATE TABLE ROLE_UTILISATEUR (
    ID_ROLE INTEGER NOT NULL
    , ID_UTILISATEUR INTEGER NOT NULL
    , CONSTRAINT FK_ROLE_UTILISATEUR_U FOREIGN KEY(ID_UTILISATEUR) REFERENCES UTILISATEUR(ID_UTILISATEUR)
    , CONSTRAINT FK_ROLE_UTILISATEUR_R FOREIGN KEY(ID_ROLE) REFERENCES ROLE(ID_ROLE)
    , CONSTRAINT PK_ROLE_UTILISATEUR PRIMARY KEY(ID_ROLE, ID_UTILISATEUR));


INSERT INTO PREFECTURE (REGION, DEPARTEMENT, PREFECTURE, ADRESSE, CODE_POSTAL, VILLE) VALUES ('PAYS DE LA LOIRE', 'LOIRE ATLANTIQUE', 'NANTES', 'MAIRIE', 44000, 'NANTES');
INSERT INTO PREFECTURE (REGION, DEPARTEMENT, PREFECTURE, ADRESSE, CODE_POSTAL, VILLE) VALUES ('SEINE SAINT DENIS', 'ILE DE FRANCE', 'SEVRAN', 'MAIRIE', 93270, 'SEVRAN');

INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (350, TO_DATE('17/05/2018', 'DD/MM/YYYY'));
INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (450, TO_DATE('17/05/2018', 'DD/MM/YYYY'));
INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (550, TO_DATE('30/05/2018', 'DD/MM/YYYY'));
INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (650, TO_DATE('31/05/2018', 'DD/MM/YYYY'));
INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (750, TO_DATE('25/06/2018', 'DD/MM/YYYY'));
INSERT INTO VALISE (NUM_VALISE, DATE_VALISE) VALUES (950, TO_DATE('29/06/2018', 'DD/MM/YYYY'));

INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', true);
INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (2, 'user', '12dea96fec20593566ab75692c9949596833adc9', true);
INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (3, 'userdb', '62c76a220118c16919dc3b6beda5434c3987c1e9', true);

INSERT INTO ROLE (ID_ROLE, ROL_NOM) VALUES (1, 'ADMIN');
INSERT INTO ROLE (ID_ROLE, ROL_NOM) VALUES (2, 'USER');

INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (1, 1);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (1, 2);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (2, 2);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (3, 2);



COMMIT;
