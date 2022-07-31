const express = require("express");
const {createPdf, types} = require("./utils/createPdf");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/hiragana", (req, res) => {
    createPdf(types.HIRAGANA, (binary) => {
        res.contentType("application/pdf");
        res.send(binary);
    }, (error) => {
        res.send("ERROR: " + error);
    });
});

app.get("/katakana", (req, res) => {
    createPdf(types.KATAKANA, (binary) => {
        res.contentType("application/pdf");
        res.send(binary);
    }, (error) => {
        res.send("ERROR: " + error);
    });
});

app.get("/romaji", (req, res) => {
    createPdf(types.ROMAJI, (binary) => {
        res.contentType("application/pdf");
        res.send(binary);
    }, (error) => {
        res.send("ERROR: " + error);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

