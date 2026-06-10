import React from 'react'
import img from '../assets/restaurant.jpg'
import img2 from '../assets/rest 2.jpg'
import img3 from '../assets/rest 3.jpg'
import img4 from '../assets/rest 4.jpg'

import { FaBed, FaCoffee, FaEnvelope, FaPhoneAlt, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';
  

function Restaurant() {
  return (
    <div className="container my-2">
      <h1>Restaurant</h1>
      <img src={img} alt="Restaurant"
      style={{ justifyContent: 'center', alignItems: 'center',  width: '80%', height: '80%', borderRadius: '8px', padding: '1rem', margin: '0 auto', display: 'block' }}
      />

      {/* CARD DETAILS */}
      <div className="container my-5">
      <div className="row g-4">

        {/* LEFT CARD */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">

            <h1 className="fw-bold mb-4">Restaurant</h1>

            <h6 className="text-uppercase text-secondary mb-3">
              Facility Description
            </h6>

            <p className="text-muted lh-lg">
              The Restaurant offers a delightful dining experience with a diverse menu featuring both local and international cuisine. It provides a sophisticated atmosphere for guests to enjoy their meals in comfort.
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
              <span>Phone No: +2348064410162</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4" style={{color: '#CDA274'}}>
              <FaEnvelope size={20} />
              <span>Email: <br/> doggedugo@gmail.com</span>
            </div>
                <br /><br /> 
            <div className="d-flex align-items-center gap-3     mb-4" style={{color: '#CDA274'}}>
              <FaPhoneAlt size={20} />
              <span>Reservation by Phone: <br /> +2348064410162</span>
            </div>                  
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>

          {/* PHOTO GALLERY */}
    <div className="d-flex">
        <div>
          {/* <h1>Restaurant</h1> */}
          <img src={img} alt="Restaurant"
            style={{  width: '20rem', height: '20rem', borderRadius: '8px', margin: '0 auto' }}
          />
        </div>
        <div> 
          {/* <h1>Restaurant</h1> */}
          <img src={img2} alt="Restaurant"
            style={{  width: '20rem', height: '20rem', borderRadius: '8px',  margin: '0 auto' }}
          />
        </div>
        <div>
          {/* <h1>Restaurant</h1> */}
          <img src={img3} alt="Restaurant"
            style={{  width: '20rem', height: '20rem', borderRadius: '8px',  margin: '0 auto', display: 'block' }}
          />
        </div>
        <div>
          {/* <h1>Restaurant</h1> */}
          <img src={img4} alt="Restaurant"
            style={{  width: '20rem', height: '20rem', borderRadius: '8px',  margin: '0 auto', display: 'block' }}
          />
        </div>
    </div>
    
  </div>
  );
}

export default Restaurant 