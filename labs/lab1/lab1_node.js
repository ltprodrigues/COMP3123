/* Purpose:
se will use node to create a server and then listen on that server for any incoming requests. Then return a response.
*/

var http = require("http")

http.createServer( (request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })

    response.end("The server is now running succesfully and listening")

}).listen(8088)

//Optional homework: try another port