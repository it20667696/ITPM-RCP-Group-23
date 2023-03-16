const router = require("express").Router();
let userSchema = require("../models/userSchema");

/*
router.get("/", (req, res) => {
  console.log("Connect");
})
*/

//http://localhost:5000/Doctor/add
router.post("/add", async (req, res) => {

    const {
        userID,
        firstName,
        lastName,
        displayName,
        age,
        gender,
        phoneNo,
        email,
        userType,
    } = req.body;

    if (!userID || !firstName || !lastName || !displayName || !age || !gender || !phoneNo || !email || !userType) {
        res.status(422).json("Please fill the data");
    }
    try {
        const preUser = await userSchema.findOne({ email: email });
        console.log(preUser);

        if (preUser) {
            res.status(422).json("This user is already present");
        } else {
            const addUser = new userSchema({
                userID,
                firstName,
                lastName,
                displayName,
                age,
                gender,
                phoneNo,
                email,
                userType,
            });

            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch (error) {
        //res.status(422).json(error);
    }

})

//http://localhost:5000/Doctor/getdata
router.get("/get", async (req, res) => {
    try {
        const userData = await userSchema.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch (error) {
        res.status(422).json(error);

    }
})

//http://localhost:5000/Doctor/get/id
router.get("/get/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userById = await userSchema.findById({ _id: id });
        console.log(userById);
        res.status(201).json(userById);

    } catch (error) {
        res.status(422).json(error);
    }
})

//http://localhost:5000/Doctor/update/id

router.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await userSchema.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateUser);
        req.status(201).json(updateUser);
    } catch (error) {
        res.status(422).json(error);
    }
})

//http://localhost:5000/Doctor/delete/id

router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deleteUser = await userSchema.findByIdAndDelete({ _id: id });
        console.log(deleteUser);
        req.status(201).json(deleteUser);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
