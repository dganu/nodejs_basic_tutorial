const {readFile,writeFile} = require("fs")
let first;
let second;
readFile("./content/first.txt","utf-8",(err,data)=>
{
  console.log(data);
  first = data;
  
});
readFile("./content/second.txt","utf-8",(err,data)=>
{
  console.log(data);
  second = data;
});
console.log("Hello I am in here")
writeFile("./content/result-sync.txt",first,()=>{
  console.log("Task COmpleted");
})