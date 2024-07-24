import React, { useState, useEffect } from "react";
import { createHotel, updateHotel } from "../api";

function HotelForm({ selectedHotel, onSave }) {
  const [hotel, setHotel] = useState({
    name: "",
    address: "",
    rooms: 0,
    stars: 1,
    amenities: [],
    description: "",
  });

  useEffect(() => {
    if (selectedHotel) {
      setHotel(selectedHotel);
    }
  }, [selectedHotel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hotel._id) {
      await updateHotel(hotel._id, hotel);
    } else {
      await createHotel(hotel);
    }
    onSave();
    setHotel({
      name: "",
      address: "",
      rooms: 0,
      stars: 1,
      amenities: [],
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={hotel.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="address"
        value={hotel.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <input
        type="number"
        name="rooms"
        value={hotel.rooms}
        onChange={handleChange}
        placeholder="Rooms"
        required
      />
      <input
        type="number"
        name="stars"
        value={hotel.stars}
        onChange={handleChange}
        min="1"
        max="5"
        required
      />
      <input
        type="text"
        name="amenities"
        value={hotel.amenities}
        onChange={handleChange}
        placeholder="Amenities (comma separated)"
      />
      <textarea
        name="description"
        value={hotel.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default HotelForm;
