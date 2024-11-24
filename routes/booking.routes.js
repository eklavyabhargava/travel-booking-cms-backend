const express = require("express");
const AuthenticateAdmin = require("../middleware/AuthencateAdmin");
const {
  getAllBookings,
  updateBooking,
  createBooking,
} = require("../controllers/BookingController");
const app = express();

app.use(AuthenticateAdmin);

// API to create new booking
app.post("/bookings", async (req, res) => {
  const response = await createBooking(req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to get all bookings
app.get("/bookings", async (req, res) => {
  const response = await getAllBookings();
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to update a booking
app.put("/bookings/:id", async (req, res) => {
  const response = await updateBooking(req.params.id, req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

module.exports = app;
