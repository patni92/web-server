var express = require("express");
var app = express();
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("private route hit");
        next();
    },
};

app.use(middleware.requireAuthentication);

app.use(express.static(__dirname + "/public"));
app.listen(3000, function () {
    console.log("express server started");
});
