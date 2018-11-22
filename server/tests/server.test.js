
const request = require('supertest');
const expect = require("expect");
const {app} = require("../server");
const {Todo} = require("../models/todo");
const { ObjectID} = require('mongodb');

describe("POST /todo",()=>{
    it("should post a valid todo",(done)=>{
        let passedtext = "new todo 1";
        request(app)
        .post("/todos")
        .send({
            _id:new ObjectID('5bf6f274f9ec872161b9f8a6') ,
            text:passedtext,
        })
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text)
        })

        done();
    });

    it("invalid body",(done)=>{
        
        request(app)
        .post("/todos")
        .send({ })
        .expect(400)
        
        done();
    });
})

describe("GET /todo",()=>{
    it("should get todos",(done)=>{
        request(app)
        .get("/todos")
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos).toBe(Array);
        })

        done();
    });
})

describe("GET /todo/",()=>{
    it("should get todo by id given",(done)=>{
        request(app)
        .get("/todo/5bf6f274f9ec872161b9f8a6")
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo).toBe(Object);
        })

        done();
    });

    it("invalid Id",(done)=>{
        request(app)
        .get("/todo/5bf99b8301")
        .expect(400)
        .expect((res)=>{
            expect(res.body).toBe("Invalid ID value");
        })

        done();
    });
})

describe("PATCH /todo/5bf6f274f9ec872161b9f8a6",()=>{
    
    it("should update todo by id given",(done)=>{
        request(app)
        .patch("/todo/5bf6f274f9ec872161b9f8a6")
        .send({text:"updated",complete:true})
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo).toBe(Object);
        })

        done();
    });
})

describe("DELETE /todo/5bf6f274f9ec872161b9f8a6",()=>{
    
    it("should delete todo by id given",(done)=>{
        request(app)
        .delete("/todo/5bf6f274f9ec872161b9f8a6")
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo).toBe(Object);
        })

        done();
    });
})