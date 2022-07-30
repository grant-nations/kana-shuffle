const kana = require("./utils/kana");

let fonts = {
    NotoSansJP: {
        normal: './fonts/NotoSansJP-Regular.otf'
    }
};
let PdfPrinter = require("pdfmake");
let printer = new PdfPrinter(fonts);

let fs = require("fs");

let docDefinition = {
    content: [
        {
            table: {
                body:[
                    ["one", "two", "three", "four"],
                    ["5", "6", "7", "8"],
                    ["11", "12", "13", "14"]
                ]
            }
        }
    ],
    defaultStyle: {
        font: "NotoSansJP"
    }
};
let pdfDoc = printer.createPdfKitDocument(docDefinition, {});
pdfDoc.pipe(fs.createWriteStream('document.pdf'));

pdfDoc.end();
