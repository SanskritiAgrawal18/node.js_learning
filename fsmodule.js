//file system module


const fs=require("fs")
fs.readFile('file.txt',(err,data)=>{
    console.log(err,data.toString())
})

//readFile() ye non blocking functn h to read baad me krega file, baaki kaam ko ni rokega
fs.readFile('file.txt',(err,data)=>{
         console.log(err,data.toString())
})
console.log("finished reading file")

//readFileSync() block krdeta h aur sequence me execute krta h statement
const a=fs.readFileSync('file.txt');
console.log(a.toString())
console.log("finished reading file")

//write file method
fs.writeFile('file.txt', "I am sanskriti", ()=>{
    console.log("Written successfully");
})
console.log("finished writing")

//same for write function
fs.writeFileSync('file.txt', "I am sanskriti");
console.log("finished writing")