//File System
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if(err) {
        throw err
    }

    console.log('Folder was crated');
});

const filePath = path.join(__dirname, 'test', 'test.txt');
fs.writeFile(filePath, 'Hello NodeJS!', err => {
    if (err) {
        throw err;
    }

    console.log('File was crated');
});

fs.appendFile(filePath, '\nHello again!', err => {
    if (err) {
        throw err;
    }

    console.log('File was crated');
});

// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err;
//     }
//
//     const data = Buffer.from(content);
//
//     console.log('Content: ', data.toString());
// });

fs.readFile(filePath, 'utf-8',(err, content) => {
    if (err) {
        throw err;
    }

    console.log('Content: ', content);
});