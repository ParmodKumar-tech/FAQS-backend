const mongoose = require("mongoose");

const FAQSchema=new mongoose.Schema({
    question:{type:String, required:true},
    answer:{type:String, required:true, default:"No answer provided!"},
    translations: {
            question_hi: { type: String },
            question_bn: { type: String }
        }
    
})

const FAQModel=mongoose.model("FAQ",FAQSchema);
module.exports=FAQModel;