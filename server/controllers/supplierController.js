
const SupplierSchema = require("../models/supplierSchema");


export const addSupplier = async (req, res) =>{
    const {
        firstName,
        lastName,
        phoneNo,
        email,
        password,
        userType,
    } = req.body;

    if (!firstName || !lastName || !phoneNo || !email || !password || !userType) {
        res.status(422).json("Please fill the data");
    }
    try {
        const preUser = await SupplierSchema.findOne({ email: email });
        console.log(preUser);

        if (preUser) {
            res.status(422).json("This user is already present");
        } else {
            const addSupplier = new SupplierSchema({
                firstName,
                lastName,
                phoneNo,
                email,
                password,
                userType,
            });

            await addSupplier.save();
            res.status(201).json(addSupplier);
            console.log(addSupplier);
        }

    } catch (error) {
        res.status(422).json(error);
    }

}

export const getsuppliers = async (req, res) => {
    try {
        const getsuppliers = await SupplierSchema.find();
        res.status(201).json(getsuppliers);
        console.log(getsuppliers);
    } catch (error) {
        res.status(422).json(error);
}
 }


 export const getsupplier  = async (req, res) =>{
    try {
        console.log(req.params);
        const { id } = req.params;

        const getsupplier = await SupplierSchema.findById({ _id: id });
        console.log(getsupplier);
        res.status(201).json(getsupplier);

    } catch (error) {
        res.status(422).json(error);
    }
}


 export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const updateSupplier = await SupplierSchema.findByIdAndUpdate(id, req.body, {
            new: true
        });
        req.status(201).json(updateSupplier);
    } catch (error) {
        res.status(422).json(error);
    }
}



    export const deletesupplier = async (req, res) =>{
    try {
        const { id } = req.params;

        const deletesupplier = await SupplierSchema.findByIdAndDelete({ _id: id });
        req.status(201).json(deletesupplier);
      } catch (error) {
        res.status(422).json(error);
    }
}

 
