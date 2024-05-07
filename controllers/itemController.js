const itemModel = require("../models/itemModels");

//get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//post items

const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Items Created Successfully");
  } catch (error) {
    res.status(400).send("Error", error);
    console.log(error);
  }
};

//update item
const editItemController = async (req, res) => {
  try {
    await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body, {
      new: true,
    });
    res.status(201).send("Item Updated");
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};

//delete item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).json("item Deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
