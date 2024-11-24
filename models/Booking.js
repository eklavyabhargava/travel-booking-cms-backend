const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  selectedPackage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package", // Reference to the Package model
    required: true,
  },
  numberOfTravelers: {
    type: Number,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
