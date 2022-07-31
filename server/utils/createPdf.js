const {HIRAGANA, KATAKANA, ROMAJI} = require("./kana");
const fs = require("fs");
const PdfPrinter = require("pdfmake");
const {shuffle} = require("./shuffle");
const {capitalize} = require("./capitalize");

const types = {
    HIRAGANA : "hiragana",
    KATAKANA : "katakana",
    ROMAJI : "romaji"
}

const fonts = {
    NotoSansJP: {
        normal: './server/fonts/NotoSansJP-Regular.otf',
        bold: './server/fonts/NotoSansJP-Bold.otf'
    }
};

const createPdf = (type, callback) => {

    let characters = [];
    let subheaderText = "";

    switch (type) {
        case "hiragana":
            characters = HIRAGANA;
            subheaderText = types.KATAKANA;
            break;
        case "katakana":
            characters = KATAKANA;
            subheaderText = types.HIRAGANA;
            break;
        case "romaji":
            characters = ROMAJI;
            subheaderText = `${types.KATAKANA} or ${types.HIRAGANA}`;
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
            {text: `${capitalize(type)} Shuffle`, style: "header"},
            {
                text: `Write the corresponding ${subheaderText} characters in the spaces next to the ${type} characters.`,
                style: 'subheader'
            },
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
            },
            subheader: {
                fontSize: 12,
                margin: [0, 0, 0, 10],
                alignment: "center",
            },
        }
    };
    let pdfDoc = printer.createPdfKitDocument(docDefinition, {});

    let chunks = [];
    let result;

    pdfDoc.on('data', function (chunk) {
        chunks.push(chunk);
    });
    pdfDoc.on('end', function () {
        result = Buffer.concat(chunks);
        callback(result);
    });
    pdfDoc.end();
}



exports.createPdf = createPdf;
exports.types = types;
