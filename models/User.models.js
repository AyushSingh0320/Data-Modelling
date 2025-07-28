import mongoose from 'mongoose';
const userschema = new mongoose.Schema({

    name:{
        type : String ,
        required : true,
        unique : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password:{
        type : String,
        required : true,
    },
}, 
{timestamps : true}
);


export const User = mongoose.model("User", userschema);