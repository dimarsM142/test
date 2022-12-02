const http = require('http');
const { hostname } = require('os');
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("HELLO WORLD")
});

server.listen(PORT, hostname, () => {
    console.log("OK");
})