const mongoose = require("mongoose");
// Linge eli fetet heya bch nejibo nahna bibliothéque Mongoss
const schema = mongoose.Schema;
// Création d'un raccourci pour mongoose.Schema

const animalsSchema = new schema({
    id: String,
    code: String,
    name: String,
    description: String,
    image: String,
    price: String,
    category: String,
    quantity: String,
    inventoryStatus: String,
    rating: String,
});

const Animals = mongoose.model("Animals", animalsSchema);
module.exports = Animals;
