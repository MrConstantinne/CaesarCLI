Caesar cipher CLI

Опции командной строки:

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

1) Склонируйте репозиторий
2) Установите зависимости 
3) Запустите приложение:

Пример запуска приложения для работы через терминал: 
$ node src -a encode -s 1

Пример запуска приложения для работы через файлы: 
$ node src -a encode -s 1 -i ./src/data/input.txt -o ./src/data/output.txt






Task 1. Caesar cipher CLI tool
Implement CLI tool that will encode and decode a text by Caesar cipher.

CLI tool should accept 4 options (short alias and full name):

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
Details:

For command-line arguments could be used one of
https://www.npmjs.com/package/commander
https://www.npmjs.com/package/minimist or any other module.
Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
If the input file is missed - use stdin as an input source.
If the output file is missed - use stdout as an output destination.
If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
For encoding/decoding use only the English alphabet, all other characters should be kept untouched.
Hints: As suggested solution to make streams code more robust, and memory effective, consider to use pipeline method. Structure can be the following:

pipeline(
  input_stream, // input file stream or stdin stream
  transform_stream, // standard Transform stream or https://github.com/rvagg/through2
  output_stream // output file stream or stdout stream
)
.then(success and error callbacks)
Usage example:

$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
