
let CollectReqSchema = require("../models/collectReqSchema");


export const createcollctreq = async (req, res) =>{
    const {
        custermer_id,
        name,
        contact,
        address,
        time,
        date,
        qty,
        quality,
        material_type,
        latitude,
        longitude,
        status,
    } = req.body;

    if (!name || !address || !time || !qty || !date || !quality|| !material_type) {
        res.status(422).json("Please fill the data");
    }else{
    try {
       
            const createcollctreq = new CollectReqSchema({
                custermer_id,
                name,
                contact,
                address,
                time,
                date,
                qty,
                quality,
                material_type,
                latitude,
                longitude,
                status,
            });

            await createcollctreq.save();
            res.status(201).json(createcollctreq);
            console.log(createcollctreq);
       

    } catch (error) {
        res.status(422).json(error);
    }
}

}

export const  getCollectReq = async (req, res) => {
    try {
        const getCollectReq = await CollectReqSchema.find();
        res.status(201).json(getCollectReq);
        console.log(getCollectReq);
    } catch (error) {
        res.status(422).json(error);
}
 }


export const  updateCollectRequests = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const updateCollectRequests = await CollectReqSchema.findByIdAndUpdate(id, req.body, {
            new: true
        });
        // console.log(updateCollectRequests);
        res.status(200).json(updateCollectRequests);
    } catch (error) {
        res.status(422).json(error);
    }
}



export const  getCollectRequests = async (req, res) =>{
    try {
        console.log(req.params);
        const { id } = req.params;

        const userById = await CollectReqSchema.findById({ _id: id });
        console.log(userById);
        res.status(201).json(userById);

    } catch (error) {
        res.status(422).json(error);
    }
}


export const  deleteCollectReq = async (req, res) =>{
    try {
        const { id } = req.params;

        const deleteCollectReq = await CollectReqSchema.findByIdAndDelete({ _id: id });
        console.log(deleteCollectReq);
        res.status(201).json(deleteCollectReq);
    } catch (error) {
        res.status(422).json(error);
    }
}

 
