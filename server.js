const http = require('http');

const server = http.createServer(function (req, res) {
	res.setHeader("Content-type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200);

	let dataObj = { id: 001, firstName: "Firstname", lastName: "LastName", email: "email.com" };
	let data = JSON.stringify(dataObj);
	res.end(data);
});

server.listen(3030, function () {
	console.log("Listening On Port 3030");
});