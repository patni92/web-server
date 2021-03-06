var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("private route hit");
        next();
    },
};

app.use(middleware.requireAuthentication);

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function () {
    console.log("express server started on " + PORT);
});
