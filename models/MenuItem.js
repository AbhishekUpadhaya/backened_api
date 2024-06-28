const mongoose=require('mongoose');

const MenuSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
        
    },
    ingredients:{
        type:[String],
        default:[],

    },
    Num_sales:{
        type:Number,
        default:0,
    }
 
})

//create a new model
const menuItem=mongoose.model("menu",MenuSchema);

module.exports=menuItem