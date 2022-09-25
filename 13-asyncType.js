const fs = require('fs').promises;
const fetch = require('node-fetch')

let rawdata;
//access data from the file and add a property status to it 
const getDataFromJson = async () =>
{
rawdata = await fs.readFile('tasks.json', 'utf8');
let data = JSON.parse(rawdata);
let tasks = data.tasks;

tasks.map((task)=>
{
    if(task.id < 2)
    {
     task.status = "pending"
    }
    else{
        task.status = "completed"
    }
})

await fs.writeFile('./updatedTasks.json',JSON.stringify(data));
console.log("done writing")
}
const getDataFromWebsite = async () =>
{
    const response = await fetch("http://www.google.com");
    console.log(await response.headers)
}
const getDataFromJsonServer =async () =>
{
    let user = {'name': 'morpheus','job': 'leader'}
    const response = await fetch("https://reqres.in/api/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers :{'Content-Type':'application/json'}
    })
    console.log(await response.json())

}
//getDataFromJson();
//getDataFromWebsite();
//getDataFromJsonServer();