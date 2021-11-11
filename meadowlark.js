const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.type("text/plain");
    response.send("Meadowlark Travle");
});

app.get("/about", (request, response) => {
    response.type("text/plain");
    response.send("About Meadowlark Travle");
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

app.listen(port, () => console.log(
    `Express stared on http://localhost:${port}; ` +
    `press Ctrl - C to terminate.`
));