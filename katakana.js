const getKatakana = () => {
    let characters = [96];
    for (let i = 0; i < 96; i++) {
        characters[i] = String.fromCodePoint(0x30a0 + i);
    }
    return characters;
}

exports.getKatakana = getKatakana;
