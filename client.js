const net = require("net");
const fs = require('fs');

if (process.argv.length <= 2) {
  console.log('USAGE:');
  console.log('client.js [REMOTEFILE] [LOCALFILE]');
  console.log('');
  console.log('EXAMPLE:');
  console.log('client.js /etc/hosts hostsbackup.txt');
  process.exit();
}

if (process.argv.length < 4) {
  throw new Error("Not enough arguments passed");
}

let remoteFileName = process.argv[2];
let localFileName = process.argv[3];

const client = net.createConnection({
  host: "localhost",
  port: 4455,
});

client.setEncoding("utf8"); 

client.on("data", (data) => {
  fs.writeFile(localFileName, data, (err) => {
    process.exit();
  });
});

client.write('GET ' + remoteFileName);