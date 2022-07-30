const kana = require("./utils/kana");

let fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf'
    }
};
let PdfPrinter = require("pdfmake");
let printer = new PdfPrinter(fonts);

let fs = require("fs");

let docDefinition = {

};
let pdfDoc = printer.createPdfKitDocument(docDefinition, {});
pdfDoc.pipe(fs.createWriteStream('document.pdf'));

pdfDoc.end();
