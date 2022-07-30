const {HIRAGANA, KATAKANA, ROMAJI} = require("./kana");
const fs = require("fs");
const PdfPrinter = require("pdfmake");
const {shuffle} = require("./shuffle");

const types = {
    HIRAGANA : "hiragana",
    KATAKANA : "katakana",
    ROMAJI : "romaji"
}

const fonts = {
    NotoSansJP: {
        normal: './fonts/NotoSansJP-Regular.otf',
        bold: './fonts/NotoSansJP-Bold.otf'
    }
};

const createPdf = (type) => {

    let characters = [];

    switch(type){
        case "hiragana":
            characters = HIRAGANA;
            break;
        case "katakana":
            characters = KATAKANA;
            break;
        case "romaji":
            characters = ROMAJI;
            break;
    }

    characters = shuffle(characters);

    const characterArrays = [];

    for (let i = 0; i < characters.length;) {
        const newCharacterArray = [5];
        for (let j = 0; j < 5; j++) {
            newCharacterArray[j] = characters[i] || "";
            i++;
        }
        characterArrays.push(newCharacterArray);
    }

    let printer = new PdfPrinter(fonts);

    let docDefinition = {
        pageSize: "LETTER",
        content: [
            {text: "Hiragana Shuffle", style: "header"},
            {
                table: {
                    widths: ["*", "*", "*", "*", "*"],
                    body: characterArrays
                }
            }
        ],
        defaultStyle: {
            font: "NotoSansJP",
            fontSize: 12,
        },
        styles: {
            header: {
                fontSize: 14,
                bold: true,
                alignment: "center",
                margin: [0, 0, 0, 10]
            }
        }
    };
    let pdfDoc = printer.createPdfKitDocument(docDefinition, {});
    pdfDoc.pipe(fs.createWriteStream('document.pdf'));

    pdfDoc.end();
}



exports.createPdf = createPdf;
exports.types = types;
