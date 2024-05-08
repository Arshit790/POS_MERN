const itemModel = require("../models/billsModel");

//get items
const addBillsController = async (req, res) => {
  try {
    const newBill = await billsModel(req.body);
    newBill.save()
    res.status(201).send('Bill Created Successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
};
