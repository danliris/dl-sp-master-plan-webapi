var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/working-capacities-standards",
    model: require("dl-models").spMasterPlan.WorkingCapacitiesStandard,
    validate: require("dl-models").validator.spMasterPlan.workingCapacitiesStandard,
    util: require("dl-module").test.data.spMasterPlan.workingCapacitiesStandard,
    keyword: "code"
});
