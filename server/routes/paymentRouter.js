const router = require("express").Router();
const paymentSchema = require("../models/paymentSchema");



//CREATE PAYMENT

router.post("/", async (req,res) => {
    console.log("body", req.body);


     const newPayment = new paymentSchema(req.body);
     try{
        const savedPayment = await  newPayment.save();
        res.status(200).json(savedPayment);
     }catch(err){
        console.log(err)
        res.status(500).json(err)
     }
}
);

//UPDATE PAYMENT


router.put("/:id",async (req,res) => {
    try{

        const payment = await paymentSchema.findById(req.params.id);
         try{
            const updatedpayment = await paymentSchema.findByIdAndUpdate(req.params.id,{
                $set:req.body

            },{new:true}
            );
            res.status(200).json(updatedpayment);
         }catch(err){
       res.status(500).json(err); 
         }
    }catch(err){
       res.status(500).json(err); 
    }
})


//DELETE PAYMENT



router.delete("/:id", async (req,res) => {
    try{
        // const payment = await paymentSchema.findById(req.params.id)
         
           await paymentSchema.findByIdAndDelete(req.params.id);
            res.status(200).json("Payment has been deleted");
         
    }catch(err){
       res.status(500).json(err); 
    }
});

//GET POST

router.get("/:id",async (req,res) =>{
    try{
         const payment = await paymentSchema.findById(req.params.id);
         res.status(200).json(payment);
    }catch(err){
        res.status(500).json(err);
    }
})

//GET ALL PAYMENT

router.get("/",async (req,res) =>{
    try{
        let paymentRoute = await paymentSchema.find();
         res.status(200).json(paymentRoute);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;