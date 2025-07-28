import mongoose from "mongoose";    

const orderschema = new mongoose.schema({
    orderId : {
        type : Number,
        required : true ,
        unique : true 
    },
    placedby : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    paymentStatus : {
        type : String,
        enum : ["Pending", "Completed", "Failed"],
        default : "Pending",

    },
    phoneNo : {
        type : Number,
        required : true,
        unique : true,
    },
    orderstatus : {
        type : String,
        enum : ["Pending", "Shipped", "Delivered", "Cancelled"],
        default : "Pending",
    },



} , {});





export const order = mongoose.model("order",orderschema);