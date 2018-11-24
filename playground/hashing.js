const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    username : 'ram',
    password : 'hsbdddhhh'
}

let token = jwt.sign(data,'mysecret');

console.log('token',token);


let decoded=jwt.verify(token,'mysecret');


console.log('decoded',decoded);