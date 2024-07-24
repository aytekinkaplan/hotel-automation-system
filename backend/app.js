const express = require("express");
const app = express();
const hotelRoutes = require("./routes/hotel");
const userRoutes = require("./routes/user");

app.use(express.json());

app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;
