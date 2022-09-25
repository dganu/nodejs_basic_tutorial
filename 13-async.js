//read data from json file , updated the file 
const { write } = require("fs");
const fetch = require("node-fetch")
const {readFile,writeFile} = require("fs/promises")
let  tasks;
const readFromJSONFile = async () =>
{
    const tasksList = await readFile("./tasks.json","utf-8");
    tasks = JSON.parse(tasksList).tasks    
    
    tasks.map((task)=>{
      if(task.id < 2) task.reminder = true;
    }
    )

    let updatedTasks = tasks.filter(task=> task.reminder === true)

    console.log(updatedTasks)
    writeFile("./updatedTasks.json",JSON.stringify(updatedTasks),"utf-8");
}
const getDataFromWebsite = async () =>
{
    const response = await fetch("http://www.google.com")
    console.log(response.headers);
}
const readFromJSONServer = async () =>
{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const tasks = await response.json()
    console.log(tasks)
    //create a resource 
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
//readFromJSONFile()
//getDataFromWebsite()
readFromJSONServer()