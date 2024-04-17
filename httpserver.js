const http=require('http');
const port= process.env.PORT||3000;//ye port set krne k liye use krte h, env=environment
// const port= process.env.PORT||3000; //agar port undefined hai(set nai h) to 3000 set hojaega
const server =http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode=200;//(200 for cookies)
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is my first page using node.js</h1><p> Hello doston, I m Sanskriti</p>');
    
})
server.listen(port,()=>{
    console.log('Server is running on port', port);
});
// you can check this webpage using localhost:3000 