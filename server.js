const http = require("http");

const server = http.createServer((request, response) => {
  console.log({
    url: request.url,
    method: request.method,
    headers: request.headers,
  });
});

const PORT = 4000;
server.listen(PORT);
