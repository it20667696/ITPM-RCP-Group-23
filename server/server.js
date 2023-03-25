const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//Models
const userSchema = require("./models/userSchema");
const paymentSchema = require("./models/paymentSchema");



require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start the server
//define the port for server
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

//Routes
const userRouter = require("./routes/UserRouter.js");
const payRoute = require("./routes/paymentRouter");



//app use
app.use("/user", userRouter);
app.use("/payment",payRoute);


app.listen(port, () => {
    console.log("Server is starting on port " + port);
});
