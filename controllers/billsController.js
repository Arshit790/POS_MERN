const billsModel = require("../models/billsModel");

//add bills
const addBillsController = async (req, res) => {
  try {
    const newBill = await billsModel(req.body);
    newBill.save();
    res.send("Bill Created Successfully");
  } catch (error) {
    res.send("Something Went Wrong");
    console.log(error);
  }
};

//get bills data
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
