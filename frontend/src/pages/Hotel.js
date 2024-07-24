import React, { useState, useEffect } from "react";
import { getHotels, deleteHotel } from "../api";
import HotelForm from "./../components/HotelForm";
import HotelList from "./../components/HotelList";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const response = await getHotels();
    setHotels(response.data);
  };

  const handleSave = () => {
    fetchHotels();
    setSelectedHotel(null);
  };

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleDelete = async (id) => {
    await deleteHotel(id);
    fetchHotels();
  };

  return (
    <div>
      <h1>Hotels</h1>
      <HotelForm selectedHotel={selectedHotel} onSave={handleSave} />
      <HotelList hotels={hotels} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Hotels;
