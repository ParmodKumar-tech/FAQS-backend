
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodOverride =require("method-override");
const faqsRoute=require("./routes/faqs");

const dotenv = require("dotenv");
dotenv.config()

const PORT=process.env.PORT || 8000;
const dbURL=process.env.DB_URL;

// const dbURL="mongodb://127.0.0.1:27017/faq-backend";

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

async function main(){
    await mongoose.connect(dbURL);
}

main()
.then((res)=>{console.log("Connected with DB")})
.catch((e)=>{console.log(e.message)})


app.use("/",faqsRoute);

app.listen(PORT,(req,res)=>{
    console.log(`server is listining on port ${PORT}`);
})