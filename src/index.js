const commands = require('./commands.js');
const transform = require('./transform.js');
const { getReadFileStream, getWriteFileStream } = require('./help.js');
const pipeline = require('./pipeline.js');

const {
    shift: transformShift,
    action: transformAction,
    input: inputFilePath,
    output: outputFilePath,
} = commands.opts();

let inputStream;
let transformStream;
let outputStream;

if (inputFilePath) {
    inputStream = getReadFileStream(inputFilePath);
} else {
    inputStream = process.stdin;
}

transformStream = transform(Number(transformShift), transformAction);

if (outputFilePath) {
    outputStream = getWriteFileStream(outputFilePath);
} else {
    outputStream = process.stdout;
}

pipeline(inputStream, transformStream, outputStream)
    .then(() =>
        process.stdout.write(
            `${ inputFilePath ? 'File' : 'String' } has been ${ transformAction }d \n`
        )
    )
    .catch((err) =>
        process.stderr.write(
            `${ inputFilePath ? 'File' : 'String' } has not been ${ transformAction }d: \n ${ err } \n`
        )
    );