const { MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

 if(err){
     console.log('Error occured',err);
 }

 console.log('connected to server');

 const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({text:'something new'},{$set: {text:'something different'}})    
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))





 client.close();

})