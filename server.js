const http = require("http");

const server = http.createServer((request, response) => {
  console.log({
    url: request.url,
    method: request.method,
    headers: request.headers,
  });
  switch (request.url) {
    case "/home":
      response.setHeader("Content-Type", "text/html");
      response.write("Welcome home");
      response.end();
      break;
    case "/about":
      response.setHeader("Content-Type", "text/html");
      response.write("Welcome to About Us page");
      response.end();
      break;
    case "/node":
      response.setHeader("Content-Type", "text/html");
      response.write("Welcome to my Node Js project");
      response.end();
      break;
    default:
      response.setHeader("Content-Type", "text/html");
      response.write("Default Page");
      response.end();
      break;
  }
});

const PORT = 4000;
server.listen(PORT);
