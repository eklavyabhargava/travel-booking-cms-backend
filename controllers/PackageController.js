const Package = require("../models/Package");

module.exports = {
  // Handler to create new travel package
  async createPackage(reqBody) {
    try {
      const newPackage = new Package(reqBody); // create new package document
      const savedPackage = await newPackage.save(); // save the package to db
      return { status: 201, message: "Package created!", savedPackage };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        message: `Error creating package: ${error.message}`,
      };
    }
  },

  // Handler to read all travel package
  async getAllPackages() {
    try {
      const packages = await Package.find(); // Retrieve all packages
      return { status: 200, packages }; // Respond with the package list
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error retrieving packages: ${error}` };
    }
  },

  // Handler to fetch single package by ID
  async getPackage(packageId) {
    try {
      const package = await Package.findById(packageId); // Find a package by its ID
      if (!package) {
        return { status: 404, message: "Package not found" };
      }
      return { status: 200, package }; // Respond with the package data
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error retrieving package: ${error}` };
    }
  },

  // Handler to update travel package
  async updatePackage(packageId, newData) {
    try {
      const updatedPackage = await Package.findByIdAndUpdate(
        packageId,
        newData,
        { new: true, runValidators: true } // Return the updated document
      );
      if (!updatedPackage) {
        return { status: 404, message: "Package not found" };
      }
      return { status: 200, updatedPackage }; // Respond with the updated package
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error updating package: ${error}` };
    }
  },

  // Handler to delete travel package
  async deletePackage(packageId) {
    try {
      const deletedPackage = await Package.findByIdAndDelete(packageId); // Delete a package by ID
      if (!deletedPackage) {
        return { status: 404, message: "Package not found" };
      }
      return { status: 200, message: "Package deleted successfully" };
    } catch (error) {
      console.error(error);
      return { status: 500, message: `Error deleting package: ${error}` };
    }
  },
};
