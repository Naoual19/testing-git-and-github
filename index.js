import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("Hello, world");
});

app.listen(3000);