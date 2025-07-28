import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    productid : {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    Owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true});

export const Product = mongoose.model("Product" , productschema)