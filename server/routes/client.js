const express = require("express");
const {
  getProducts,
  getCustomers,
  getTransactions,
  createProduct,
  createCustomer,
  createTransaction,
  updateProduct,
  updateCustomer,
  updateTransaction,
  patchProduct,
  patchCustomer,
  patchTransaction,
  deleteProduct,
  deleteCustomer,
  deleteTransaction,
  getProductById,
  getCustomerById,
  getTransactionById,
} = require("../controllers/client.js");
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

router.post("/addProduct", createProduct);
router.post("/addCustomer", createCustomer);
router.post("/addTransaction", createTransaction);

router.put("/updateProduct/:id", updateProduct);
router.put("/updateCustomer/:id", updateCustomer);
router.put("/updateTransaction/:id", updateTransaction);

router.patch("/patchProduct/:id", patchProduct);
router.patch("/patchCustomer/:id", patchCustomer);
router.patch("/patchTransaction/:id", patchTransaction);

router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/deleteCustomer/:id", deleteCustomer);
router.delete("/deleteTransaction/:id", deleteTransaction);

router.get("/getProductById/:id", getProductById);
router.get("/getCustomerById/:id", getCustomerById);
router.get("/getTransactionById/:id", getTransactionById);

module.exports = router;
