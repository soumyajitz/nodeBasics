var http = require('http');
var fs = require('fs');

function send404(response) {
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('Error 404: Resource not found.');
    response.end();
}

var server = http.createServer(function(req, res) {
    if(req.method == 'GET' && req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('./public/index.html').pipe(res);
    }
    else {
        send404(res);
    }
}).listen(3000);

console.log('Running at http://localhost:3000'); 