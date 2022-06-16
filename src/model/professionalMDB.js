const { Schema, model } = require("mongoose");

const ProfessionalSchema = new Schema({
    name: String,
    surname: String,
    profession: String,
    nationality: String,
    genre: String
});

module.exports = model("Professional", ProfessionalSchema, "professional");