const { MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

 if(err){
     console.log('Error occured',err);
 }

 console.log('connected to server');

 const db = client.db('TodoApp');

db.collection('Todos').deleteMany({text:'something'})    //deleteOne()
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))

db.collection('Todos').findOneAndDelete({text:'something wrong'})    
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))



 client.close();

})