const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

// 핸들바 뷰 엔진 설정
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");

app.get("/", (request, response) => response.render("home"));

app.get("/about", (request, response) => {
    const fortunes = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant suprise.",
        "Whenever possible, keep it simple.",
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    response.render("about", { fortune: randomFortune });
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