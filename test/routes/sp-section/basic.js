var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/sp-sections",
    model: require("dl-models").spMasterPlan.SpSection,
    validate: require("dl-models").validator.spMasterPlan.spSection,
    util: require("dl-module").test.data.spMasterPlan.spSection,
    keyword: "code"
});