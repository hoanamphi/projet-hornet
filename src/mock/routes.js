"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hornet_js_utils_1 = require("hornet-js-utils");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.mock.routes");
/**
 * Liste des utilisateurs en mode bouchon
 * @type {any[]}
 */
var users = [
    {
        "name": "test",
        "roles": [{ "id": 2, "name": "projet-hornet_USER" }]
    },
    {
        "name": "admin",
        "roles": [{ "id": 1, "name": "projet-hornet_ADMIN" }, { "id": 2, "name": "projet-hornet_USER" }]
    }
];
function findByUsername(username) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.name === username) {
            return user;
        }
    }
    return null;
}
var BouchonRoutes = /** @class */ (function () {
    function BouchonRoutes() {
    }
    BouchonRoutes.build = function (router) {
        router.post("/utilisateurs/auth", function () {
            var user = findByUsername(this.req.body.login);
            this.res.json({
                "hasTechnicalError": false,
                "hasBusinessError": false,
                "status": 200,
                "url": "url",
                "errors": [],
                "data": user
            });
        });
        router.post("/contact/envoyer", function () {
            this.res.json({
                "hasTechnicalError": false,
                "hasBusinessError": false,
                "status": 200,
                "url": "url",
                "errors": [],
                "data": {
                    message: "Courriel envoyé"
                }
            });
        });
    };
    return BouchonRoutes;
}());
exports.BouchonRoutes = BouchonRoutes;
//# sourceMappingURL=routes.js.map