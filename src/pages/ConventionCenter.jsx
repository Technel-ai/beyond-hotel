import React from 'react'
import img from '../assets/convention-center.jpg'

import { FaPhoneAlt, FaCoffee, FaEnvelope, FaSnowflake, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';
  

function ConventionCenter() {
  return (
    <div className="container my-2">
      <h1>Convention Center</h1>
      <img src={img} alt="Convention Center"
      style={{ justifyContent: 'center', alignItems: 'center',  width: '80%', height: '80%', borderRadius: '8px', padding: '1rem', margin: '0 auto', display: 'block' }}
      />

      {/* CARD DETAILS */}
      <div className="container my-5">
      <div className="row g-4">

        {/* LEFT CARD */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">

            <h1 className="fw-bold mb-4">Convention Center</h1>

            <h6 className="text-uppercase text-secondary mb-3">
              Center Description
            </h6>

            <p className="text-muted lh-lg">
              The Convention Center is a state-of-the-art facility designed for hosting large-scale events and conferences. It features modern amenities and flexible spaces to accommodate various types of gatherings.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-lg-4" >
          <div className="card shadow-sm border-0 p-4 h-100">

            <h6 className="text-uppercase text-secondary mb-4">
              Information
            </h6>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaPhoneAlt size={20} />
              <span>Phone: +2348064410162</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaEnvelope size={20} />
              <span>Email: <br />doggedugo@gmail.com</span>
            </div>
                <br /><br />
            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaPhoneAlt size={20} />
              <span>Booking by Phone: +2348064410162</span>
            </div>
                        
          </div>
        </div>

      </div>
    </div>

    </div>
  );
}

export default ConventionCenter 