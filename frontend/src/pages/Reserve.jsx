import React, { useState } from "react";
import axios from "axios";
import "../styles/Pages.css"

const Reserve = () => {
  const [seatCount, setSeatCount] = useState(1);

  const reserveSeats = async () => {
    try {
      const response = await axios.post("http://localhost:5000/seats/reserve", { seatCount });
      alert("Reserved Seats: " + response.data.reservedSeats.map((seat) => seat.id).join(", "));
    } catch (error) {
      alert("Reservation Failed: " + error.response.data.error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={seatCount}
        onChange={(e) => setSeatCount(Number(e.target.value))}
        min="1"
        max="7"
      />
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
};

export default Reserve;
