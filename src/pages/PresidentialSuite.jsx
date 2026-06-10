import React from 'react'

import img from '../assets/president3.webp'
import img2 from '../assets/president.jpg'
import img3 from '../assets/president2.jpg'
import {Link} from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

import {FaBed, FaCoffee, FaSnowflake, FaWineGlass, FaWifi, FaCar, } from 'react-icons/fa';

function PresidentialSuite() {
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
            Presidential Suite
          </h1>

          <h2 className="slider-text">
            Luxury Beyond Comfort
          </h2>
        
          <button className="book-now-btn">   
            <Link to="/Bookings" className="text-white text-decoration-none">
              Book Now
            </Link>         
          </button>
          <marquee behavior="" direction="">WELCOME TO BEYOND HOTEL</marquee>

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
                The Express Rooms, provide elite comfort and amenities perfect for a leisure. The design and accent of the room emits an exquisite ambiance and gives a focused and diversion-free environment accompanied with serene views from the room window.
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

export default PresidentialSuite