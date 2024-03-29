const path = require('path');

console.log('File name: ', path.basename(__filename));

console.log('Directory name: ', path.dirname(__filename));

console.log('File extension: ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));
console.log('Parse name: ', path.parse(__filename).name);

console.log('Join path: ', path.join(__dirname, 'server', 'index.html'));