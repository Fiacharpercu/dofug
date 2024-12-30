const fs = require('fs');
const fileName = 'example.txt';

// Reading from a file:
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Or checking the file extension:
if (fileName.endsWith(".txt")) {
    // Do something specific for .txt files
}
