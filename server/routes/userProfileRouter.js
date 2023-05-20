const router = require("express").Router();
let userProfileSchema = require("../models/userProfileSchema");

/*
router.get("/", (req, res) => {
  console.log("Connect");
})
*/

//http://localhost:5000/userprofile/add
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

  if (
    !userID ||
    !firstName ||
    !lastName ||
    !displayName ||
    !age ||
    !gender ||
    !phoneNo ||
    !email ||
    !userType
  ) {
    res.status(422).json("Please fill the data");
  }
  try {
    const preUser = await userProfileSchema.findOne({ email: email });
    console.log(preUser);

    if (preUser) {
      res.status(422).json("This user is already present");
    } else {
      const addUser = new userProfileSchema({
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
});

//http://localhost:5000/userprofile/getdata
router.get("/get", async (req, res) => {
  try {
    const userData = await userProfileSchema.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});

//http://localhost:5000/userprofile/get/id
router.get("/get/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userById = await userProfileSchema.findById({ _id: id });
    console.log(userById);
    res.status(201).json(userById);
  } catch (error) {
    res.status(422).json(error);
  }
});

//http://localhost:5000/userprofile/update/id

router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await userProfileSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateUser);
    req.status(201).json(updateUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

//http://localhost:5000/userprofile/delete/id

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await userProfileSchema.findByIdAndDelete({ _id: id });
    console.log(deleteUser);
    req.status(201).json(deleteUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
