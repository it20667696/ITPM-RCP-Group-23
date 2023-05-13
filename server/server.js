const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//Models
const userProfileSchema = require("./models/userProfileSchema");
const UserSchema = require("./models/User");
const paymentSchema = require("./models/paymentSchema");
const productSchema = require("./models/ProductSchema");
const productStatSchema = require("./models/ProductStatSchema");
const transactionSchema = require("./models/Transaction");
const overallStatSchema = require("./models/OverallStat");
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} = require("./data/index.js");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
const userProfileRouter = require("./routes/userProfileRouter.js");
const payRoute = require("./routes/paymentRouter.js");
const clientRoutes = require("./routes/client.js");
const salesRoutes = require("./routes/sales.js");
const managementRoutes = require("./routes/management.js");
const generalRoutes = require("./routes/general.js");

//app use
app.use("/client", clientRoutes);
app.use("/userprofile", userProfileRouter);
app.use("/payment", payRoute);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);
app.use("/general", generalRoutes);

//Start the server
//define the port for server
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is starting on port " + port);
    });

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // productSchema.insertMany(dataProduct);
    // productStatSchema.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
  });

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});
