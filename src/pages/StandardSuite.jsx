import React from 'react'

import img from '../assets/standard.jpeg'
import img2 from '../assets/standard2.jpeg'
import img3 from '../assets/standard3.jpeg'
import {Link} from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

import {
  FaBed,
  FaCoffee,
  FaSnowflake,
  FaWineGlass,
  FaWifi,
  FaCar,
} from 'react-icons/fa';

function StandardSuite() {
  return (

    <div className="slider-container my-2">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        <SwiperSlide>
          <img
            src={img}
            alt="Room"
            className="w-100 rounded"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            alt="Room"
            className="w-100 rounded"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img3}
            alt="Room"
            className="w-100 rounded"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <div className="slider-overlay">

          <h1 className="slider-title">
            Standard Suite
          </h1>

          <h2 className="slider-text">
            Luxury Beyond Comfort
          </h2>
        
          <button className="book-now-btn">
            <Link to="/Bookings" className="text-white text-decoration-none">
              Book Now
            </Link>
            {/* Book Now */}
          </button>

        </div>

      </Swiper>

      {/* CARD DETAILS */}
      <div className="container my-5">
        <div className="row g-4">

          {/* LEFT CARD */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 p-4 h-100">

              <h1 className="fw-bold mb-4">
                {/* Presidential Suite */}
              </h1>

              <h6 className="text-uppercase text-secondary mb-3">
                Room Description
              </h6>

              <p className="text-muted lh-lg">
                Our Standard Room offers a perfect blend of comfort and style, featuring a plush bed, modern amenities, complimentary Wi-Fi, and a peaceful atmosphere—ideal for both relaxation and productivity during your stay.
              </p>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4 h-100">

              <h6 className="text-uppercase text-secondary mb-4">
                Room Features
              </h6>

              <div className="d-flex align-items-center gap-3 mb-4" style={{ color: '#CDA274' }}>
                <FaBed size={20} />
                <span>Double King Bed</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4" style={{ color: '#CDA274' }}>
                <FaCoffee size={20} />
                <span>Breakfast</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4" style={{ color: '#CDA274' }}>
                <FaSnowflake size={20} />
                <span>Air Conditioning</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4" style={{ color: '#CDA274' }}>
                <FaWineGlass size={20} />
                <span>Mini Bar</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4" style={{ color: '#CDA274' }}>
                <FaWifi size={20} />
                <span>Wi-Fi Service</span>
              </div>

              <div className="d-flex align-items-center gap-3" style={{ color: '#CDA274' }}>
                <FaCar size={20} />
                <span>Free Parking</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default StandardSuite