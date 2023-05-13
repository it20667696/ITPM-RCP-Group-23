const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = new mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
