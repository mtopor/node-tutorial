const os = require('os');

console.log('OS: ', os.platform());

console.log('Processor architecture: ', os.arch());

console.log('Processor info: ', os.cpus());

console.log('Free memory: ', os.freemem());

console.log('Total memory: ', os.totalmem());

console.log('Home dir: ', os.homedir());

console.log('Uptime: ', os.uptime());