const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: Number,
  releaseDate: Date,
  genre: String
});

module.exports = mongoose.model('Movie', movieSchema);
