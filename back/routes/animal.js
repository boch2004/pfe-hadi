const express = require("express");
const Animal = require("../models/animal");
const animalRouter = express.Router();

// Add animal
animalRouter.post("/add", async (req, res) => {
  try {
    let newAnimal = new Animal(req.body);
    let result = await newAnimal.save();
    res.send({ animals: result, msg: "Animal is added" });
  } catch (error) {
    console.log(error);
  }
});

// Get all animals
animalRouter.get("/", async (req, res) => {
  try {
    let result = await Animal.find();
    res.send({ animals: result, msg: "All animals" });
  } catch (error) {
    console.log(error);
  }
});

// Get one animal
animalRouter.get("/:id", async (req, res) => {
  try {
    let result = await Animal.findById(req.params.id);
    res.send({ animals: result, msg: "One animal" });
  } catch (error) {
    console.log(error);
  }
});

// Delete animal
animalRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Animal.findByIdAndDelete(req.params.id);
    res.send({ msg: "Animal is deleted" });
  } catch (error) {
    console.log(error);
  }
});

// Edit animal
animalRouter.put("/:id", async (req, res) => {
  try {
    let result = await Animal.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "Animal is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = animalRouter;
