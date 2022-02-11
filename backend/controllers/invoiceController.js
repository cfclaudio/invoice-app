/*  @desc    Get invoices
    @route   GET /api/invoices
    @access  Private    */
const getInvoices = (req, res) => {
  res.status(200).json({ message: "Get invoices" });
};

/*  @desc    Create invoice
    @route   POST /api/invoices
    @access  Private    */
const createInvoice = (req, res) => {
  res.status(201).json({ message: "Create invoices" });
};

/*  @desc    Update invoice
    @route   PUT /api/invoices/:id
    @access  Private    */
const updateInvoice = (req, res) => {
  res.status(200).json({ message: `Update invoice #${req.params.id}` });
};

/*  @desc    Delete invoice
    @route   DELETE /api/invoices
    @access  Private    */
const deleteInvoice = (req, res) => {
  res.status(200).json({ message: `Delete invoice ${req.params.id}` });
};

module.exports = {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
