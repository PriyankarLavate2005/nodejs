const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.end('Hello World');
    } 
    else if(req.url == '/info'){
        res.end("here you can get information about the node js");
    }
    else {
        res.end('Invalid URL'); 
    }
});
server.listen(3000, () => {
    console.log("Server started on port 3000");
});