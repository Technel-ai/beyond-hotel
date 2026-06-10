import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {Link} from 'react-router-dom' 
import {useNavigate} from 'react-router-dom'

function Bookings() {
  const today = new Date().toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate(); 

  const handleBooking = () => {
  navigate("/BookingCard", {
    state: {
      checkIn,
      checkOut,
      adults,
      children,
      rooms, 
    },
  });
};

  return (
    <div className="booking-wrapper">
      <div className="booking-grid">

        {/* CHECK IN */}
        <div className="booking-box">
          <label>Check In</label>
          <div className="input-box">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>

        {/* CHECK OUT */}
        <div className="booking-box">
          <label>Check Out</label>
          <div className="input-box">
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* GUESTS */}
        <div className="booking-box">
          <label>Guests</label>

          <div className="guest-dropdown">
            <details>
              <summary>
                {adults} Adult, {children} Child
                <FaChevronDown />
              </summary>

              <div className="dropdown-content">
                <div className="guest-row">
                  <span>Adults</span>

                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="guest-row">
                  <span>Children</span>

                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="guest-row">
                  <span>Rooms</span>

                  <select
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* BUTTON */}
        <button className="book-btn2" onClick={handleBooking}>
          Book Now
        </button>

      </div>
    </div>
  );
}

export default Bookings;