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
    data = data.trim();
    console.log("Message from client: ", data);

    let file = data.split(' ').slice(1);
    if (data.startsWith('GET')) {
      getFile(client, file[0]);
    }
  });
});

const getFile = function (client, file) {
  fs.readFile(file, 'utf8', (err, content) => {
    client.write(content);
  });
}