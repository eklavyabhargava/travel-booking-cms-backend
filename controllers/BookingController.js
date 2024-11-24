const Booking = require("../models/Booking");
const Package = require("../models/Package");

module.exports = {
  // Handler to create a new booking
  async createBooking(reqBody) {
    const { customerName, contactInfo, selectedPackage, numberOfTravelers } =
      reqBody;

    try {
      // Validate if the package exists
      const packageExists = await Package.findById(selectedPackage);
      if (!packageExists) {
        return { status: 404, message: "Selected package not found" };
      }

      // Create and save the booking
      const newBooking = new Booking({
        customerName,
        contactInfo,
        selectedPackage,
        numberOfTravelers,
      });
      const savedBooking = await newBooking.save();

      return { status: 201, savedBooking };
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error creating booking: ${error}` };
    }
  },

  // Handler to get all bookings
  async getAllBookings() {
    try {
      const bookings = await Booking.find().populate(
        "selectedPackage",
        "title destination"
      );
      return { status: 200, bookings };
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error retrieving bookings: ${error}` };
    }
  },

  // Handler to update a booking
  async updateBooking(bookingId, newData) {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        newData,
        { new: true, runValidators: true }
      ).populate("selectedPackage", "title destination");

      return { status: 200, updatedBooking };
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error updating booking: ${error}` };
    }
  },
};
