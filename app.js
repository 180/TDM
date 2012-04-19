var http = require('http');
var fs = require('fs');

var indexHTML = fs.readFileSync('index.html');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-type': 'text/html; charset=utf-8'
	});
	response.end(indexHTML);
});

server.listen(8008);

console.log('nasluchuje na http://127.0.0.1:8008');
