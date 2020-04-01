const http = require('http');

const port = 8080;
const fs = require('fs');

const handleRequest = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  fs.readFile('./dist/index.html', null, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write('file not found');
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(port);
