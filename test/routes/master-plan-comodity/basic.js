var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-plan-comodities",
    model: require("dl-models").spMasterPlan.MasterPlanComodity,
    validate: require("dl-models").validator.spMasterPlan.masterPlanComodity,
    util: require("dl-module").test.data.spMasterPlan.masterPlanComodity,
    keyword: "code"
});