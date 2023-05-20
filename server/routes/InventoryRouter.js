var express = require("express");
var router = express.Router();
// const auth = require("../middleware/auth");
const inventorySchema = require("../models/inventorySchema");

//create item in the item list
router.post("/item",function (req, res, next) {
  const item = new inventorySchema({
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price:req.body.price,
    quantity:req.body.quantity,
    manufacture_date:req.body.manufacture_date,
    status:true,
    section:req.body.section,
    category:req.body.category,
  });

  try {
    const dataToSave = item.save();
    res.status(200).json({
      success: true,
      Message: "insertion successful",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// REtrive data from itemlist
router.get("/itemlist",async function (req, res, next) {
  const categoryType = req.body.category;
  try {
    let itemDetails = await inventorySchema.find({
      category: categoryType,
      status: true,
    });

    res.status(200).json({
      success: true,
      message: "Successful Retrieval",
      payload: itemDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      payload: [],
    });
  }
});




// REtrive all data from inventory
router.get("/getallitems", async function (req, res, next) {


  try {
    let itemDetails = await inventorySchema.find({status:true});

    res.status(200).json({
      success: true,
      message: "Successful Retrieval",
      payload: itemDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      payload: [],
    });
  }
});

//update item details
router.post("/updatedetails", (req, res, next) => {
  console.log(req.body);
  inventorySchema
    .findOneAndUpdate(
      {
        product_id: req.body.product_id,
      },
      {
        $set: {
          product_name: req.body.product_name,
          description: req.body.description,
          manufacturer: req.body.manufacturer,
          price:req.body.price,
          quantity:req.body.quantity,
          manufacture_date:req.body.manufacture_date,
          status:true,
          section:req.body.section,
          category:req.body.category,
        }
      }
    )
    .then((result) => {
      res.json({
        success: true,
        message: "inserted sucessful",
        payload: {},
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
});

// router.get("/read",auth, function (req, res, next) {
//   itemModel
//     .find({ id: req.query.id })
//     .then((itemDetails) => {
//       res.status(200).json({
//         success: true,
//         message: "inserted sucessful",
//         payload: itemDetails[0],
//       });
//     })
//     .catch((error) => {
//       res
//         .status(400)
//         .json({ success: false, message: error.message, payload: {} });
//     });
// });

//incrementing item id
router.get("/id", function (req, res, next) {
  inventorySchema
    .find()
    .sort({product_id: -1 })
    .limit(1)
    .then((product_id) => {
      res.status(200).json({
        success: true,
        message: "sucessful",
        payload: product_id[0].product_id + 1,
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
});
router.delete("/delete/:id", async (req,res) => {
  try{
      // const payment = await paymentSchema.findById(req.params.id)
       console.log('>>>',req.params.id)
         await inventorySchema.findByIdAndDelete(req.params.id);
          res.status(200).json("Payment has been deleted");
       
  }catch(err){
     res.status(500).json(err); 
  }
});
// router.delete("/itemlist/delete",(req, res, next) => {
//   inventorySchema
//     .updateOne({ product_id: req.query.product_id }, { $set: { status: false } })
//     .then((result) => {
//       res.json({
//         success: true,
//         message: "inserted sucessful",
//         payload: {},
//       });
//     })
//     .catch((e) => {
//       res.status(400).json({ success: false, message: e.message, payload: {} });
//     });
// });

router.post("/stat", async function (req, res, next) {

  try {

    let inventoryDetails = await itemModel.find({},

      { item_name: 1, total_quantity: 1, _id: 0 },

    );
    

    console.log(inventoryDetails);

    res.status(200).json({

      success: true,

      message: "Successful Retrieval",

      payload: inventoryDetails,

    });

  } catch (error) {

    res.status(400).json({

      success: false,

      message: error.message,

    });

  }

});


  router.get("/getinventoryitem/:id", async (req, res, next) => {
  //   const { id } = req.params;

  //  return console.log(id)
  
   try {
     const { id } = req.params;
     const InventoryProduct = await inventorySchema.findById(id);
     if (!InventoryProduct) {
       return res.status(404).json({ message: "Inventory Product not found." });
     }
     res.status(200).json(InventoryProduct);
   } catch (error) {
     res.status(400).json({ message: error.message });
   }
})





module.exports = router;
