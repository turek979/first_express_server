const express = require("express");

const app = express();

app.use((request, response, next) => {
    console.log("I'm in the middleware!");
    next();
});

app.use((request, response, next) => {
    console.log("I'm in another middleware!");
    response.send("<h1>Hello from express</h1>");
});

app.listen(3000);