const Hotel = require("../models/Hotel");

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    res.status(200).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createHotel = async (req, res) => {
  const { name, location } = req.body;
  try {
    const hotel = new Hotel({ name, location });
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      id,
      { name, location },
      { new: true }
    );
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    res.status(200).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByIdAndDelete(id);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
