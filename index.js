const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        res.end("Hello From Home Page!");
    }else if(req.url == "/data"){
        fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) =>{
            const objData = data;
            res.end(objData);
        })
    }
})

server.listen(5000,()=>{
    console.log("listening to port 5000");
})  