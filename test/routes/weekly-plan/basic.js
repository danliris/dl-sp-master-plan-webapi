var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/weekly-plans",
    model: require("dl-models").spMasterPlan.WeeklyPlan,
    validate: require("dl-models").validator.spMasterPlan.weeklyPlan,
    util: require("dl-module").test.data.spMasterPlan.weeklyPlan,
    keyword: "code"
});
