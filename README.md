NodeJS basic tutorial 
1. Install Node 
check node --version
2. Install VSCode 
3.Create a MongoDB Atlas cluster
For this tutorial, you will need a MongoDB database instance. If you don’t have one at hand, you can create a free cluster in MongoDB Atlas. Follow these steps to create and connect to a cluster:

->Create an Atlas account
->Deploy a Free Tier cluster
->Add your connection IP address to your IP access list
->Create a database user for your cluster
->Connect to your cluster
.


***Be sure to save the connection string and database user’s credentials for connecting to the database.
MongoDB Shell (mongosh)***
The MongoDB Shell, mongosh, is a fully functional JavaScript and Node.js 16.x REPL environment for interacting with MongoDB deployments. You can use the MongoDB Shell to test queries and operations directly with your database.

mongosh is available as a standalone package in the 
MongoDB Download Center(https://www.mongodb.com/try/download/shell?jmp=docs)
.

Download and Install mongosh
To learn how to download and install the mongosh binary, see Install
mongosh(https://www.mongodb.com/docs/mongodb-shell/install/#std-label-mdb-shell-install)
.

Connect to a MongoDB Deployment
Once you have installed the MongoDB Shell and added it to your system PATH, you can connect to a MongoDB deployment. To learn more, see Connect to a Deployment.(https://www.mongodb.com/docs/mongodb-shell/connect/#std-label-mdb-shell-connect)
.

***Practice the commands on MongoDB***
Use https://www.mongodb.com/docs/mongodb-shell/crud/ for reference 


Some of the common commands are 

Switch Databases
To display the database you are using, type db:

***db***

The operation should return test, which is the default database.

To switch databases, issue the use <db> helper, as in the following example:

  
use <database>

eg: use school 
  
To list all collections in db 
  
show collections 
  
***Using CRUD***
  
Follow this for details commands https://www.mongodb.com/docs/mongodb-shell/crud/
  
    1. Create database tutorial 
    2. Create collection tasks 
    3. Insert tasks 
    4. Connect via mongosh command line tool 
    5. use tutorial 
    6. db.tasks.insertOne({name:"Book tickets",day:"18/oct 12:00",reminder:false})
    7. db.tasks.insertMany([ { "text": "Get 500 from 12399", "day": "From 8:00 to 18:00 15.07.22", "reminder": false, "id": 1, "status": ["Not Started", "Started", "Completed", "Canceled", "Deferred"] }, { "text": "Change current tarif (probably in bug)", "day": "From 8:00 to 14:00 18.07.22", "reminder": false, "id": 2, "status": ["Not Started", "Started", "Completed", "Canceled", "Deferred"] }, { "text": "Jogging", "day": "From 8:00 to 8:30 5.08.22", "reminder": false, "id": 3, "status": ["Not Started", "Started", "Completed", "Canceled", "Deferred"] }]
    8.db.tasks.find()
  
  
    9.db.tasks.find({id:1})
  
  
    10.db.tasks.find({reminder:false})
  
  
    11.db.tasks.find({$text:{$search:"Get"}}) //index need to be created on name
  
  
    12. db.tasks.updateOne({id:2},{$set:{status:"completed"}})
  
  
    13. db.tasks.updateMany({ id: { $lt: 5 } }, { $set: { status: "completed" } })
  
  
    14. db.tasks.deleteOne({id:2}) // likewise deleteMany would also work


4. Install Extensions for nodejs , prettier , live server 
5. npm install nodemon , express , mongodb 
