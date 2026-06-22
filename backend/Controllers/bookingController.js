// backend/controllers/bookingController.js
const Booking = require('../models/Booking');
const Showtime = require('../models/Showtime');

exports.createBooking = async (req,res)=>{
  try {
    const { user, showtime, seatsBooked } = req.body;

    // Check available seats
    const show = await Showtime.findById(showtime);
    if(!show) return res.status(404).json({ error: "Showtime not found" });
    if(show.seats < seatsBooked) return res.status(400).json({ error: "Not enough seats" });

    // Deduct seats
    show.seats -= seatsBooked;
    await show.save();

    // Create booking
    const booking = new Booking({ user, showtime, seatsBooked });
    await booking.save();

    res.json(booking);
  } catch(err){
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req,res)=>{
  try {
    const bookings = await Booking.find()
      .populate('user')
      .populate('showtime');
    res.json(bookings);
  } catch(err){
    res.status(500).json({ error: err.message });
  }
};
