const fs = require('fs');
const net = require('net');
const server = net.createServer();


server.listen(4455, () => {
  console.log("Server listening on port 4455!");
});

server.on("connection", (client) => {
  client.setEncoding("utf8");

  console.log("New client connected!");
  client.write("Hello there!");

  client.on("data", (data) => {
    // Clean off any leading or trailing spaces/newlines/etc.
    data = data.trim();

    // Log what's happening to the server's console
    console.log("Message from client: ", data);

    // We're expecting 'GET filename.ext' so just take the filename
    let file = data.split(' ')[0];
    if (data.startsWith('GET')) {
      fs.readFile(file, 'utf8', (err, content) => {
        client.write(content);
      });
    }
  });
});