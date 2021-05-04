const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
	res.write('Merhaba Dünya!');
	res.end();
});

server.listen(8888, () => {
	console.log('Uygulama çalıştırıldı...');
});