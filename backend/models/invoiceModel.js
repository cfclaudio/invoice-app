const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    billFrom: {
      streetAddress: { type: String, required: true },
      postalCode: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    client: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      streetAddress: { type: String, required: true },
      postalCode: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    invoiceDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    description: { type: String },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, min: 0, required: true },
        price: { type: Number, min: 0, required: true },
      },
    ],
  },
  {
    //   creates updatedAt/createdAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
