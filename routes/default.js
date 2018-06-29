//WEEKLY PLAN
var v1WeeklyPlanByUserRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-user-router");
var v1WeeklyPlanRouter = require("../src/routers/v1/weekly-plan/weekly-plan-router");
var v1WeeklyPlanByYearRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-year-router");
var v1WeeklyPlanYearRouter = require("../src/routers/v1/weekly-plan/weekly-plan-year-router");
var v1WeeklyPlanMonitoringRemainingECRouter = require("../src/routers/v1/weekly-plan/weekly-plan-monitoring-remaining-ec-router");
var v1WeeklyPlanUnitRouter = require("../src/routers/v1/weekly-plan/weekly-plan-unit-router");

var v1WorkingCapacitiesStandardRouter = require("../src/routers/v1/working-capacities-standard/working-capacities-standard-router");

var v1StyleRouter = require("../src/routers/v1/style/style-router");

var v1StandardCapacityRouter = require("../src/routers/v1/standard-capacity/standard-capacity-router");
var v1StandardCapacityByBuyerComodityRouter = require("../src/routers/v1/standard-capacity/standard-capacity-by-buyer-comodity-router");

var v1BookingOrderRouter = require("../src/routers/v1/booking-order/booking-order-router");
var v1BookingOrderCancelRouter = require("../src/routers/v1/booking-order/booking-order-cancel-router");
var v1BookingOrderMonitoringRouter = require("../src/routers/v1/booking-order/booking-order-monitoring-router");
var v1BookingOrderExpiredRouter = require("../src/routers/v1/booking-order/booking-order-expired-router");

var v1MasterPlanComodityRouter = require("../src/routers/v1/master-plan-comodity/master-plan-comodity-router");

var v1SpinningBlockingPlanRouter = require("../src/routers/v1/spinning-blocking-plan/spinning-blocking-plan-router");
//var v1SpinningBlockingPlanPreviewRouter = require("../src/routers/v1/spinning-blocking-plan/spinning-blocking-plan-preview-router");
var v1SpinningBlockingPlanByBookingOrderNoRouter = require("../src/routers/v1/spinning-blocking-plan/spinning-blocking-plan-by-booking-order-router");
var v1SpinningBlockingPlanMonitoringRouter = require("../src/routers/v1/spinning-blocking-plan/spinning-blocking-plan-monitoring-router");

var v1SpSectionRouter = require("../src/routers/v1/sp-section/sp-section-router");
var v1SpinningBlockingPlanAcceptedOrderMonitoring = require("../src/routers/v1/spinning-blocking-plan/spinning-blocking-plan-accepted-order-monitoring-router");

module.exports = function (server) {
    //WEEKLY PLAN
    v1WeeklyPlanByUserRouter().applyRoutes(server, "/weekly-plans/by-user");
    v1WeeklyPlanRouter().applyRoutes(server, "/weekly-plans");
    v1WeeklyPlanByYearRouter().applyRoutes(server, "/weekly-plans-by-year");
    v1WeeklyPlanYearRouter().applyRoutes(server, "/weekly-plan-years");
    v1WeeklyPlanMonitoringRemainingECRouter().applyRoutes(server, "/weekly-plans-monitoring-remaining-ec")
    v1WeeklyPlanUnitRouter().applyRoutes(server,	"/weekly-plan-units");

    //WORKING HOURS STANDARD
    v1WorkingCapacitiesStandardRouter().applyRoutes(server, "/working-capacities-standards");

    //STYLE
    v1StyleRouter().applyRoutes(server, "/styles");

    //STANDARD HOURS
    v1StandardCapacityRouter().applyRoutes(server,	            "/standard-capacities");
    v1StandardCapacityByBuyerComodityRouter().applyRoutes(server,	    "/standard-capacities-by-buyer-comodity");

    //BOOKING ORDER
    v1BookingOrderRouter().applyRoutes(server, "/booking-orders");
    v1BookingOrderCancelRouter().applyRoutes(server, "/booking-orders-cancel");
    v1BookingOrderMonitoringRouter().applyRoutes(server, "/booking-orders-monitoring");
    v1BookingOrderExpiredRouter().applyRoutes(server, "/booking-orders-expired");

    //MASTER PLAN COMODITY
    v1MasterPlanComodityRouter().applyRoutes(server, "/master-plan-comodities");

    //MASTER PLAN
    v1SpinningBlockingPlanRouter().applyRoutes(server,	            "/spinning-blocking-plans");
    //v1SpinningBlockingPlanPreviewRouter().applyRoutes(server,	        "/spinning-blocking-plan-previews");
    v1SpinningBlockingPlanByBookingOrderNoRouter().applyRoutes(server,                "/spinning-blocking-plans-by-booking-order");
    v1SpinningBlockingPlanAcceptedOrderMonitoring().applyRoutes(server,            "/v1/spinning-blocking-plans-accepted-order-monitoring");
    v1SpinningBlockingPlanMonitoringRouter().applyRoutes(server,	            "/spinning-blocking-plan-monitoring");

    //GARMENT SECTION
    v1SpSectionRouter().applyRoutes(server, "/sp-sections");
}