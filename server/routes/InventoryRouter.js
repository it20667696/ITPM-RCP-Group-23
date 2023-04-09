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

// //incrementing item id
// router.get("/id",auth, function (req, res, next) {
//   itemModel
//     .find()
//     .sort({ id: -1 })
//     .limit(1)
//     .then((id) => {
//       res.status(200).json({
//         success: true,
//         message: "sucessful",
//         payload: id[0].id + 1,
//       });
//     })
//     .catch((e) => {
//       res.status(400).json({ success: false, message: e.message, payload: {} });
//     });
// });

// router.delete("/itemlist/delete", auth,(req, res, next) => {
//   itemModel
//     .updateOne({ id: req.query.id }, { $set: { status: false } })
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

// router.post("/stat", auth, async function (req, res, next) {

//   try {

//     let inventoryDetails = await itemModel.find({},

//       { item_name: 1, total_quantity: 1, _id: 0 },

//     );
    

//     console.log(inventoryDetails);

//     res.status(200).json({

//       success: true,

//       message: "Successful Retrieval",

//       payload: inventoryDetails,

//     });

//   } catch (error) {

//     res.status(400).json({

//       success: false,

//       message: error.message,

//     });

//   }

// });

module.exports = router;
