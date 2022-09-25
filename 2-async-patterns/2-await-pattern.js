const { log } = require('console')
const { readFile, writeFile } = require('fs')
const util =  require('util')
const r = util.promisify(readFile)
const w = util.promisify(writeFile)
const start = async () => {
    try {
      const first = await r('../content/first.txt', 'utf8')
      const second = await r('../content/second.txt', 'utf8')
      await w(
        '../content/result-mind-grenade.txt',
        `THIS IS SUPER : ${first} ${second}`,{flag:'a'})
      console.log(first, second)
    } catch (error) {
      console.log(error)
    }
  }
  
//start()
console.log("invoking start");
start()
console.log("contents written successfully!!!!!!!!!!");

//Instead of this messy code we write a promise, 
// const getText = (path) =>
// {
//     return new Promise((resolve,reject)=>
//     {
//         readFile(path,(err,data)=>
//         {
//             if(err){
//                 reject(err)}
//                 else{
//                     resolve(data)}  
//                 })
//             })
//         }
        
//         const first = getText('../content/first.txt')
//         .then((result)=>{
//             console.log(result);
//         })
//         .catch((err)=>
//         {
//             console.log(err);
//         })

       
        
//         const second = getText('../content/second.txt')
//         .then((result)=>{
//             console.log(result);
//         })
//         .catch((err)=>
//         {
//             console.log(err);
//         })
        
//         writeFile('../content/result-async.txt',`this is really something ${first} ${second}`,(err)=>
//         {
//             console.error(err);
//         }
//         )

//         console.log(first,second)
        // readFile('../content/first.txt','utf8',(err,data)=>{
        //     if(err)
        //     {
        //         console.error(err)
        //         exit(1)
        //     }
        //     const first = data
        //     const second = readFile('../content/second.txt','utf8',(err,data)=>
        //     {
        //         if(err)
        //         {
        //             console.error(err);
        //             exit(1);
        //         }
        //         writeFile('../content/result-sync.txt',`This is a new file : ${first} ${second}`,(err)=>
        //         {
        //             if(err)
        //             {
        //                 console.error(err);
        //                 exit(1);
        //             }
        //         })
        //     })
        // })
        
        console.log("read done")