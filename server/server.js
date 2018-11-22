

const { mongoose } = require('./db/mongoose')
const { User } = require('./models/user')
const { Todo } = require('./models/todo')

const express = require('express');
const bodyparser = require('body-parser');

const port = process.env.PORT || 3000 ;

const app = new express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((data)=>{
       res.send(data);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
});

app.get("/todos",(req,res)=>{
    Todo.find().then((todos)=>{
       res.send({todos});
    })
    .catch((e)=>res.status(400).send(er))
})


app.listen((port), () => {
    console.log(`Server started on port ${port}`);
});


module.exports = {app};