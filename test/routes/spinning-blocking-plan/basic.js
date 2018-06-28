var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-plans",
    model: require("dl-models").spMasterPlan.SpinningBlockingPlan,
    validate: require("dl-models").validator.spMasterPlan.spinningBlockingPlan,
    util: require("dl-module").test.data.spMasterPlan.spinningBlockingPlan,
    keyword: "code"
});