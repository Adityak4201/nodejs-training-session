import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World! This is a Node.js app");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
