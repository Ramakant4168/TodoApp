
const request = require('supertest');
const expect = require("expect");
const {app} = require("../server");
const {Todo} = require("../models/todo");


describe("POST /todo",()=>{
    it("should post a valid todo",(done)=>{
        let passedtext = "new todo 1";
        request(app)
        .post("/todos")
        .send({text:passedtext})
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

describe.only("GET /todo/5bf58172134ef208799b8301",()=>{
    it("should get todo by id given",(done)=>{
        request(app)
        .get("/todo/5bf58172134ef208799b8301")
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