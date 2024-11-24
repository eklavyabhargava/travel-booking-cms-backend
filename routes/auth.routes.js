const express = require("express");
const { loginUser, signupUser } = require("../controllers/AuthController");
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const response = await loginUser(req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// Signup route
router.post("/signup", async (req, res) => {
  const response = await signupUser(req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

module.exports = router;
