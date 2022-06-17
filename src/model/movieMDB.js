const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
    title: String,
    releaseYear: Date,
    genre: String,
    actors: [String],
    writers: [String],
    directors: [String],
    producer: String
});

module.exports = model("Movie", MovieSchema, "movie");