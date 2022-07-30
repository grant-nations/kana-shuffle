const {createPdf, types} = require("./utils/createPdf");
const {HIRAGANA, KATAKANA, ROMAJI} = types;

createPdf(ROMAJI);
