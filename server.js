const http = require("http");

// Create a web server using the createServer function
const server = http.createServer((request, response) => {
  // The function inside createServer is called for every incoming HTTP request

  // Set the HTTP response header
  response.writeHead(200, { "Content-Type": "text/plain" });

  // Write the response content
  response.end("Avisi Hemanth Kumar");
});

// Start the server and listen on a specific port
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
