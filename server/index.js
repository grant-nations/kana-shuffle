const path = require('path');
const express = require("express");
const {createPdf, types} = require("./utils/createPdf");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

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

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

