const ALPHABET_LENGTH = 26;

const generateAlphabet = () => [
    ...Array(ALPHABET_LENGTH)
].map((_, y) => String.fromCharCode(y + 97));

const isUpperCase = (char) => {
    const code = char.charCodeAt(0);
    return code >= 65 && code <= 90;
};

const isLowerCase = (char) => {
    const code = char.charCodeAt(0);
    return code >= 97 && code <= 122;
};

const isExist = (char) => isUpperCase(char) || isLowerCase(char);

module.exports = {
    isUpperCase,
    isLowerCase,
    isExist,
    generateAlphabet,
    ALPHABET_LENGTH,
};