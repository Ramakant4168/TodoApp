const { MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

 if(err){
     console.log('Error occured',err);
 }

 console.log('connected to server');

 const db = client.db('TodoApp');

// db.collection('Todos').find({_id: new ObjectID('5bf45a3cbf78930dad2bd209')}).toArray()
// .then((data)=>{
//     console.log(JSON.stringify(data,undefined,2));
// })
// .catch((err)=>console.log(err))

// db.collection('Todos').find().count()
// .then((count)=>{
//     console.log('count',count);
// })
// .catch((err)=>console.log(err))

db.collection('Users').find({name: 'test'}).toArray()
.then((data)=>{
    console.log(JSON.stringify(data,undefined,2));
})
.catch((err)=>console.log(err))

 client.close();

})