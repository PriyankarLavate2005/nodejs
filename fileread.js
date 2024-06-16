const fs=require('fs')
console.log("start reading")
// fs.readFile('input.txt',(err,content)=>{
// if(err){
//     return console.error(err)
// }
// console.log(content)

// })
// console.log("Last line")
// const content=fs.readFileSync("./input.txt")
// console.log(content.toString())
// console.log("last Line")
fs.writeFileSync('Output.txt','hello students are you doing well')
