const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true}, // unique means no username should be the same in the db
        desc:{type:String, required:true},
        img:{type:String, required: true},
        categories:{type:Array}, //more than one category
        size:{type:String},
        color:{type:String},
        price:{type:Number, required: true},
                
    },
    {timestamps:true} //logged time schema created
)

module.exports = mongoose.model("Product", ProductSchema)