const express=require("express");
const router=express.Router({mergeParams:true});
const faqs=require("../controllers/faqs");

router
    .route("/")
    .get(faqs.showAllFAQS)

router 
    .route("/api/faqs/")
    .post(faqs.addFAQS)
    .get(faqs.queryFAQS)

router 
    .route("/getFAQS/:id")
    .get(faqs.ShowUpdateForm)

router 
    .route("/api/faqs/:id")
    .put(faqs.updateFAQS)
    .delete(faqs.deleteFAQS)

module.exports=router;    