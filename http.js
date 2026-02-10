import http from "http";

const server = http.createServer((req, res) => {

  // Home route
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Home Page");
  }

  // Task 1: Add /about route
  else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About Page");
  }

  // Task 2: Return JSON response
  else if (req.url === "/api" && req.method === "GET") {
    const data = { message: "Hello from API", status: "success" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // Task 3: Set proper status code (404 for unknown routes)
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
