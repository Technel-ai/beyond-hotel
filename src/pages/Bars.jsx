import React from 'react'
import img from '../assets/bar1.jpg'
import img2 from '../assets/bar2.jpg'
import img3 from '../assets/bar 3.avif'

import { FaBed, FaCoffee, FaSnowflake, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';
  

function Bars() {
  return (
    <div className="container my-2">

      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" style={{ height: 'auto' }}>
            <img
              src={img}
              className="w-100 d-block"
              alt="First slide"
            />
          </div>
          <div className="carousel-item" style={{ height: 'auto' }}>
            <img
              src={img2}
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item" style={{ height: 'auto' }}>
            <img
              src={img3}
              className="w-100 d-block"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      

      {/* CARD DETAILS */}
      <div className="container my-5">
      <div className="row g-4">

        {/* LEFT CARD */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">

            <h1 className="fw-bold mb-4">Bars</h1>

            <h6 className="text-uppercase text-secondary mb-3">
              Room Description
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

export default Bars