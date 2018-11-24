
const  mongoose  = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require("lodash");

const UserSchema = new mongoose.Schema({
    email:{ 
        type: String,
        required: true,
        trim: true,
        unique:true,
        minLength:1,
        validate : {
            validator : validator.isEmail,
            message : `{VALUE} is not a valid email`
        }
        },
    password: {
        type:String,
        required:true
    },
    tokens : [{
        access:{
            type:String,
            required: true
        },
        token:{
            type:String,
            required:true
        }
    }]
});
UserSchema.statics.findByToken= function(token){
    let decoded;

    try{
       decoded = jwt.verify(token,'mysecret');
    }
    catch(e){

    }
    console.log('decoded',decoded);
    return User.findOne({
        _id:decoded._id
    });
}
UserSchema.methods.toJSON = function (){
    user=this;
    let userObject = user.toObject();
    return _.pick(userObject,['email','_id'])
}
UserSchema.methods.generateToken = function(){
    user=this;
    let access = 'auth';
    let token = jwt.sign({_id:user._id.toHexString(),access},'mysecret').toString();
    user.tokens.push({access,token});

    return user.save()
    .then(() => {return token});
}

let User = mongoose.model('User', UserSchema);

module.exports = { User };