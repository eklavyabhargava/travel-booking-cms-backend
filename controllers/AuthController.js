const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

module.exports = {
  // Login handler
  async loginUser(reqBody) {
    const { username, password } = reqBody;

    try {
      const admin = await Admin.findOne({ username });
      if (!admin) return { status: 404, message: "Admin not found" };

      // Check if the password matches
      const isPasswordMatch = await admin.matchPassword(password);
      if (!isPasswordMatch) {
        return { status: 401, message: "Invalid credentials" };
      }

      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      return { status: 200, message: "Login successful", token };
    } catch (error) {
      console.error(error);
      return { status: 500, message: "Internal Server Error" };
    }
  },

  // Signup handler
  async signupUser(reqBody) {
    const { username, password } = reqBody;

    if (!username || !password)
      return { status: 400, message: "Required field missing" };

    try {
      // create new admin
      const admin = new Admin({ username, password });

      // Save to the database
      await admin.save();
      return { status: 201, message: "Admin registered successfully!" };
    } catch (error) {
      console.error(error);
      return { status: 500, message: "Internal server error" };
    }
  },
};
