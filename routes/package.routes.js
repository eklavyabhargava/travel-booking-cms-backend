const express = require("express");
const app = express();
const AuthenticateUser = require("../middleware/AuthencateAdmin");
const {
  createPackage,
  getAllPackages,
  getPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/PackageController");

app.use(AuthenticateUser);

// API to create new travel package
app.post("/packages", async (req, res) => {
  const response = await createPackage(req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to retrieve all packages
app.get("/packages", async (req, res) => {
  const response = await getAllPackages();
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to retrieve travel package by ID
app.get("/packages/:id", async (req, res) => {
  const response = await getPackage(req.params.id);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to update package
app.put("/packages/:id", async (req, res) => {
  const response = await updatePackage(req.params.id, req.body);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

// API to delete package
app.delete("/packages/:id", async (req, res) => {
  const response = await deletePackage(req.params.id);
  const { status, ...restData } = response;

  res.status(status).send({ ...restData });
});

module.exports = app;
