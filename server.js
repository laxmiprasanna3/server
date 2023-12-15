const http=require("http");
const port = 8081;
http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<h6>hey we got our server here!--addon data here testing nodemon</h6>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs server started Running on port ${port}`);
})
