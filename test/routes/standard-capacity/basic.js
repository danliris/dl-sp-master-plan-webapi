var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/standard-capacities",
    model: require("dl-models").spMasterPlan.StandardCapacity,
    validate: require("dl-models").validator.spMasterPlan.standardCapacity,
    util: require("dl-module").test.data.spMasterPlan.standardCapacity,
    keyword: "code"
});