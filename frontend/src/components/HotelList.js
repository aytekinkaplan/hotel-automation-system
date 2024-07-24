import React from "react";

function HotelList({ hotels, onEdit, onDelete }) {
  return (
    <ul>
      {hotels.map((hotel) => (
        <li key={hotel._id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.address}</p>
          <p>Rooms: {hotel.rooms}</p>
          <p>Stars: {hotel.stars}</p>
          <p>Amenities: {hotel.amenities.join(", ")}</p>
          <p>{hotel.description}</p>
          <button onClick={() => onEdit(hotel)}>Edit</button>
          <button onClick={() => onDelete(hotel._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default HotelList;
