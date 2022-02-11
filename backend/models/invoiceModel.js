const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a name"] },
  },
  {
    //   creates updatedAt/createdAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
