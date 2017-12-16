
var http = require("http");

function onRequest(request,response){
console.log("a user made a request" + request.url);
response.writeHead(200,{"Context-Type":"text/html"});
response.write("hello world this is nebil")
response.end();


}
http.createServer(onRequest).listen(8001);
console.log("server is now runnging");