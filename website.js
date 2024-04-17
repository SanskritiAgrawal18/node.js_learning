// copied from httpserver.js
const fs=require('fs');
const http = require('http');
const port = process.env.PORT || 3000;//ye port set krne k liye use krte h, env=environment
// const port= process.env.PORT||3000; //agar port undefined hai(set nai h) to 3000 set hojaega
const server = http.createServer((req, res) => {

    // res.statusCode = 200;//(200 for cookies)
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    } else if (req.url == '/about') {
        res.statusCode = 500;
        res.end('<h1>This is my first page using node.js</h1><p> Hello doston, I m Sanskriti</p>');
    } else {
       // res.sans(); // ye koi defined function ni hai to run krne se crash hojaega("site can't be reached"), isliye nodemon ka use krte hai 
        res.statusCode = 404;
        res.end('<h1>This is my first page using node.js</h1><p>Don\'t know, what to say?</p>');
    }
})
server.listen(port, () => {
    console.log('Server is running on port', port);
});
// you can check this webpage using localhost:3000 