const http=require("http")
// console.log(process.argv[2])
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'})
    res.write(JSON.stringify({NAME:"I am Priyanka",SirName:"My SurName is Lavate"}))
    res.end()
}).listen(7000)

