// backend/routes/showtimeRoutes.js
const express = require('express');
const router = express.Router();
const { addShowtime, getShowtimes } = require('../controllers/showtimeController');

// Add new showtime
router.post('/', addShowtime);

// Get all showtimes
router.get('/', getShowtimes);

module.exports = router;
