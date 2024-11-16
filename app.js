const http = require("http");

const express = require("express");

const app = express();

app.use((require, response, next) => {
    console.log("i'm in the middleware!");
    next();
});

const server = http.createServer(app);

server.listen(3000);