var http = require('http');
var fs = require('fs');

fs.readFile('./index.html', 'utf-8', function(err, data){
	console.log(data);

	var server = http.createServer();

	server.on('request', function(request, response) {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		if (request.method === 'GET' && request.url === '/') {
			response.write(data);
			response.end();
		} else {
			response.statusCode = 404;
			response.write('<img src="404.jpg">');
			response.end();
		}
	});
	server.listen(9000); 
	// Skąd wiemy, co wpisać w nawiasie?
});
