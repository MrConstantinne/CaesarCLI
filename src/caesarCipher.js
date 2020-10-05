const Alphabet = require('./alphabetMethods');

const caesarCipher = (text, shift) => {
    const shiftRes = shift < 0 ? shift + Alphabet.ALPHABET_LENGTH : shift;

    const alphabet = Alphabet.generateAlphabet();

    return (
        ( ciperedText = text.split('').map((letter) => {
            if (!Alphabet.isExist(letter)) return letter;
            const isUpperCase = Alphabet.isUpperCase(letter);
            const index = alphabet.findIndex((item) => item === letter.toLowerCase());
            let newLetter = alphabet[(index + shiftRes) % Alphabet.ALPHABET_LENGTH];
            if (isUpperCase) {
                newLetter = newLetter.toUpperCase();
            }
            return newLetter;
        })).join('') + '\n'
    );
};

module.exports = caesarCipher;