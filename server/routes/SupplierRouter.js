const express = require("express");

const { addSupplier, getsuppliers, updateSupplier, getsupplier, deletesupplier } = require('../controllers/supplierController.js');


const router = express.Router();


router.get('/', getsuppliers);
router.post('/', addSupplier);
router.get('/:id', getsupplier);
router.patch('/:id', updateSupplier);
router.delete('/:id', deletesupplier);

module.exports = router;