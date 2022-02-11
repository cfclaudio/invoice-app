const asyncHandler = require("express-async-handler");

const Invoice = require("../models/invoiceModel");

//  @desc    Get invoices
//  @route   GET /api/invoices
//  @access  Private
const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find();

  res.status(200).json(invoices);
});

//  @desc    Create invoice
//  @route   POST /api/invoices
//  @access  Private
const createInvoice = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Name field is missing");
  }

  const invoice = await Invoice.create({
    name: req.body.name,
  });

  res.status(201).json(invoice);
});

//  @desc    Update invoice
//  @route   PUT /api/invoices/:id
//  @access  Private
const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  const updatedGoal = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//  @desc    Delete invoice
//  @route   DELETE /api/invoices
//  @access  Private
const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  await Invoice.remove(invoice);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
