const express = require("express");
const router = express.Router();
const { Customer, validate } = require("../models/customer");

// customer listing
router.get("/", async (req, res) => {
  try {
    const result = await Customer.find().sort("name");
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

// create customer
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  const customer = new Customer({
    name: req.body.name,
    age: req.body.age,
    isActive: req.body.isActive,
    address: req.body.address,
    date: req.body.date,
  });
  try {
    const result = await customer.save();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

// read customer
router.get("/:id", async (req, res) => {
  try {
    const result = await Customer.findById(req.params.id);
    if (!result)
      return res.status(404).send("Customer with given id not found");

    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

//update customer
router.put("/:id", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) res.status(400).send(error);

  try {
    const result = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
        isActive: req.body.isActive,
        address: req.body.address,
        date: req.body.date,
      },
      { new: true }
    );
    if (!result)
      return res.status(404).send("Customer with given id not found");

    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

//delete customer
router.delete("/:id", async (req, res) => {
  try {
    const result = await Customer.findByIdAndRemove(req.params.id);
    if (!result)
      return res.status(404).send("Customer with given id not found");

    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
