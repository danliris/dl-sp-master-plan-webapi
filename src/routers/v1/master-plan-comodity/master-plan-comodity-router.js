const apiVersion = '1.0.0';
var Manager = require("dl-module").managers.spMasterPlan.MasterPlanComodityManager;
var JwtRouterFactory = require("../../jwt-router-factory");

function getRouter() {
    var router = JwtRouterFactory(Manager, {
        version: apiVersion,
        defaultOrder: {
            "_updatedDate": -1
        }
    });
    return router;
}
module.exports = getRouter;