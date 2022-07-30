const {HIRAGANA, KATAKANA} = require("./utils/kana");
const fs = require("fs");
const PdfPrinter = require("pdfmake");
const {shuffle} = require("./utils/shuffle");

const fonts = {
    NotoSansJP: {
        normal: './fonts/NotoSansJP-Regular.otf',
        bold: './fonts/NotoSansJP-Bold.otf'
    }
};

const createHiraganaPdf = () => {

    const hiragana = shuffle(HIRAGANA);

    const hiraganaArrays = [];

    for (let i = 0; i < hiragana.length;) {
        const newHiraganaArray = [5];
        for (let j = 0; j < 5; j++) {
            newHiraganaArray[j] = hiragana[i];
            i++;
        }
        hiraganaArrays.push(newHiraganaArray);
    }

    let printer = new PdfPrinter(fonts);

    let docDefinition = {
        content: [
            {text: "Hiragana Shuffle", style: "header"},
            {
                table: {
                    widths: ["*", "*", "*", "*", "*"],
                    body: hiraganaArrays
                }
            }
        ],
        defaultStyle: {
            font: "NotoSansJP",
            fontSize: 12
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

createHiraganaPdf();
