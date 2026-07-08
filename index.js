const http = require('http');

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.CUSTOM_MESSAGE || 'Gia tri mac dinh (chua nhan duoc env)';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${MESSAGE}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});