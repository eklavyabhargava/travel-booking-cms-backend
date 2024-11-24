const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: "GET, POST, PUT, DELETE",
    optionSuccessStatus: 200,
    credentials: true,
  })
);

// Connect to mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error));

// Import models
require("./models/Admin");
require("./models/Booking");
require("./models/Package");

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api", require("./routes/package.routes"));
app.use("/api", require("./routes/booking.routes"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
