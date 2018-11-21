const { MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

 if(err){
     console.log('Error occured',err);
 }

 console.log('connected to server');

 const db = client.db('TodoApp');

 db.collection('Todos').insertOne({
     text:'something',
     completed:false
 },(err,result)=>{
     if(err){
         console.log('error occured while inserting');
     }

     console.log('result',JSON.stringify(result.ops,undefined,2));
 })

 db.collection('Users').insertOne({
    name:'test',
    age:12,
    location:'mumbai,india'
},(err,result)=>{
    if(err){
        console.log('error occured while inserting');
    }

    console.log('result',JSON.stringify(result.ops,undefined,2));
})

 client.close();

})