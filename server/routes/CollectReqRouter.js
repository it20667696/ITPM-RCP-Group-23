const express = require("express");

const { createcollctreq, getCollectReq, updateCollectRequests, getCollectRequests, deleteCollectReq } =require('../controllers/collectReqController.js');


const router = express.Router();


router.get('/', getCollectReq);
router.post('/', createcollctreq);
router.get('/:id', getCollectRequests);
router.patch('/:id', updateCollectRequests);
router.delete('/:id', deleteCollectReq);

module.exports = router;