const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const response = await newItem.save();
    console.log("data is saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
//parametrised 
//comment added
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;

    if (
      tasteType === "sour" ||
      tasteType === "sweet" ||
      tasteType === "spicy"
    ) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

//updating data

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedMenuData = req.body;
    const response = await MenuItem.findByIdAndUpdate(
      menuId,
      updatedMenuData,
      {
        new: true, //return the updated document
        runValidators: true, //run mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "MenuItem not found" });
    }

    console.log("MenuItem updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

//delete data
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; //extracting the person id from url parameter

    const response = await MenuItem.findByIdAndDelete(menuId);

    if (!response) {
      return res.status(404).json({ error: "MenuItem not found" });
    }
    console.log("MenuItem deleted");
    res.status(200).json({ message: "MenuItem deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
//comments for testing purpose
module.exports = router;
