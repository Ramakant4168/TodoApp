
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
    
    })
})