const through2 = require('through2');
const caesarCipher = require('./caesarCipher.js');

const transform = (shift, action) =>
    through2((data, _, cb) => {
        const str = data.toString();

        let transformedStr;

        if (action === 'decode') {
            transformedStr = caesarCipher(str, shift * -1);
        } else {
            transformedStr = caesarCipher(str, shift);
        }

        cb(null, Buffer.from(transformedStr));
    });

module.exports = transform;