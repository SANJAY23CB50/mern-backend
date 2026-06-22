// backend/models/Showtime.js
const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  seats: { type: Number, default: 50 } // total seats
});

module.exports = mongoose.model('Showtime', showtimeSchema);
