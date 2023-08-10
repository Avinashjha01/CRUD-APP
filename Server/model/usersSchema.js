const mongoose = require("mongoose");
const validator =require("validator");



//create users schema

const usersSchema = new mongoose.Schema({
    // login_id:{
    //     type:String,
    //      required:true,
    //      trim:true, 
    //      unique:true,
    // },
    // password:{
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    first_name:{
         type:String,
         required:true,
         trim:true,
     },
     last_name:{
        type:String,
        required:true,
        trim:true,
    },
    street:{
        type:String,
        required:true,
      
    },
    address:{
        type:String,
        required:true,
       
    },
    city:{
        type:String,
        required:true,
       
    },
    state:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Eroor("not valid Eamil")
            }
        }
    },
     phone:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10,
      },
      datecreated:Date,
      dateupdated:Date


});

//model define 
const users = new mongoose.model("users",usersSchema);
module.exports = users;