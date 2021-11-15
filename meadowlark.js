const express = require("express");
const expressHandlebars = require("express-handlebars");
const fortune = require("./lib/fortune");

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main",
}));

app.set("view engine", "handlebars");

app.get("/", (request, response) => response.render("home"));
app.get("/about", (request, response) => {
    response.render("about", {
        fortune: fortune.getFortune()
    });
});

// custom 400 page
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
});

// custom 500 page
app.use((error, request, response, next) => {
    console.error(error.message);
    response.type("text/plain");
    response.status(500);
    response.send("500 - Server Error");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log(
    `Express stared on http://localhost:${port}; ` +
    `press Ctrl - C to terminate.`
));