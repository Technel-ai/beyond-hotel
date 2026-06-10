import React from 'react'
import img from '../assets/pool2.jpg'
import img2 from '../assets/gym1.jpg'
// import img3 from '../assets/pool.jpg'

import { FaBed, FaCoffee, FaSnowflake, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';
  

function GymPool() {
  return (
    <div className="container my-2">
      <div className="d-flex gap-5 py-4 justify-content-center align-items-center">
        <div>
          {/* <h1>Restaurant</h1> */}
          <img src={img2} alt="Restaurant"
            style={{ width: '30rem', height: '30rem', borderRadius: '8px', margin: '0 auto' }}
          /> <br /> <br />
          <h2>Fitness Center</h2>
          <h6>Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor.</h6>
        </div>
        <div>
          {/* <h1>Restaurant</h1> */}
          <img src={img} alt="Restaurant"
            style={{ width: '30rem', height: '30rem', borderRadius: '8px', margin: '0 auto' }}
          /> <br /> <br />
          <h2>Pool</h2>
          <h6>Escape the heat and unwind in our stunning swimming pool, a perfect retreat for both relaxation and fun.</h6>
        </div>
      </div>
      

      {/* CARD DETAILS */}
      <div className="container my-5">
      <div className="row g-4">

        {/* LEFT CARD */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">

            <h1 className="fw-bold mb-4">Gym & Pool</h1>

            <h6 className="text-uppercase text-secondary mb-3">
              Gym and Pool Descriptions
            </h6>

            <p className="text-muted lh-lg">
              The Bars are stately with breathtaking
              views and luxurious interior finishing. The suite has
              LED TVs, a separate lounge, bar and dining area for guests.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-lg-4" >
          <div className="card shadow-sm border-0 p-4 h-100">

            <h6 className="text-uppercase text-secondary mb-4">
              Gym & Pool Features
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

export default GymPool