function test(name, path) {
    describe(name, function() {
        require(path);
    });
}

before("initialize server", function(done) {
    var server = require("../server");
    server()
        .then((server) => {
            const apiVersion = '1.0.0';

            var Router = require('restify-router').Router;
            var router = new Router();
            var resultFormatter = require("../src/result-formatter");
            var passport = require('../src/passports/local-passport');

            router.post('/', passport, (request, response, next) => {
                var account = request.user;

                var jwt = require("jsonwebtoken");
                var token = jwt.sign({
                    username: account.username,
                    profile: account.profile,
                    roles: account.roles
                }, process.env.AUTH_SECRET);

                var result = resultFormatter.ok(apiVersion, 200, token);
                response.send(200, result);
            });

            router.applyRoutes(server, "/authenticate");
            server.listen(process.env.PORT, process.env.IP);
            console.log(`server created at ${process.env.IP}:${process.env.PORT}`);

            done();
        });
});

describe('@dl-sp-master-plan-webapi', function () {
    this.timeout(2 * 60000); 
     
    // //Weekly Plan
    // test("/v1/weekly-plan", "./routes/weekly-plan");

    // //Working Hours Standard
    // test("/v1/working-hours-standard", "./routes/working-hours-standard");

    // //Style
    // test("/v1/style", "./routes/style");

    //Standard hour
    test("/v1/standard-capacity", "./routes/standard-capacity");

    //Standard hour
    // test("/v1/sewing-blocking-plan", "./routes/sewing-blocking-plan");
    // test("/v1/master-plan", "./routes/master-plan");

    //Garment Section
    // test("/v1/garment-sections", "./routes/garment-section");
    
});
