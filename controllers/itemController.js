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

const addItemController = async(req,res) => {
  try {
    const newItem = new itemModel(req.body)
    await newItem.save()
    res.status(201).send('Items Created Successfully')
  } catch (error) {
    res.status(400).send('Error',error)
    console.log(error)
  }
}

module.exports = {getItemController,addItemController}