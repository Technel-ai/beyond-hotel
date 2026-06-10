import React from 'react'
import img from '../assets/meeting2.jpg'

import { FaBed, FaCoffee, FaSnowflake, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';
  

function MeetingRoom() {
  return (
    <div className="container my-2">
      <h1>Meeting Room</h1>
      <img src={img} alt="Meeting Room"
      style={{ justifyContent: 'center', alignItems: 'center',  width: '80%', height: '80%', borderRadius: '8px', padding: '1rem', margin: '0 auto', display: 'block' }}
      />

      {/* CARD DETAILS */}
      <div className="container my-5">
      <div className="row g-4">

        {/* LEFT CARD */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">

            <h1 className="fw-bold mb-4">Meeting Room</h1>

            <h6 className="text-uppercase text-secondary mb-3">
              Room Description
            </h6>

            <p className="text-muted lh-lg">
              The Meeting room is spacious and can be divided into different separate sections for smaller meetings and comes with built in sound systems, professional lighting.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-lg-4" >
          <div className="card shadow-sm border-0 p-4 h-100">

            <h6 className="text-uppercase text-secondary mb-4">
              Room Features
            </h6>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaBed size={20} />
              <span>Double King Bed</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaCoffee size={20} />
              <span>Breakfast</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaSnowflake size={20} />
              <span>Air Conditioning</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaWineGlass size={20} />
              <span>Mini Bar</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaWifi size={20} />
              <span>Wi-Fi Service</span>
            </div>

            <div className="d-flex align-items-center gap-3" style={{color: '#CDA274'}}>
              <FaCar size={20} />
              <span>Free Parking</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    </div>
  );
}

export default MeetingRoom 