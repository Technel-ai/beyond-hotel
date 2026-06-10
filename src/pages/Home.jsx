import React from 'react'
import img2 from '../assets/beyond-slide2.jpg'
// import img1 from '../assets/beyond-slide.jpg'
import img3 from '../assets/slide1.jpg'
import { Link } from 'react-router-dom'


// ABOUT US PAGE
import img from '../assets/about.jpg'
import { FaWifi, FaSwimmingPool,  FaParking, FaConciergeBell, FaDumbbell,  FaUtensils, FaShuttleVan, FaSpa, } from "react-icons/fa";

// CONTACT US PAGE
import { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// SUITE PAGE
import img5 from '../assets/diploma.webp'
import img10 from '../assets/president.jpg'
import img4 from '../assets/deluxe2.jpg'
import img6 from '../assets/rad3.webp'
import img7 from '../assets/rad2.avif'
import img8 from '../assets/rad.avif'


import { CiWifiOn, CiParking1, CiDeliveryTruck, CiMedicalCross } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineLocalLaundryService, MdOutlineRoomService } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaOilWell } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import { BsHouseExclamation } from "react-icons/bs";
import { MdOutlineFreeBreakfast } from "react-icons/md";


function Home() {

  // CONTACT US PAGE
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rii5tj",
        "template_i6x0dsu",
        form.current,
        "QxVL45T4DGRgu04uJ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  // BEYOND SUITES
  const suiteData = [
    {
      img: img10,
      title: "PRESIDENTIAL SUITE",
      desc: "The Express Rooms, provide elite comfort and amenities perfect for a leisure. The design and accent of the room emits an exquisite ambiance and gives a focused and diversion-free environment accompanied with serene views from the room window."
    },
    {
      img: img4,
      title: "EXECUTIVE SUITE",
      desc: "The Express Rooms, provide elite comfort and amenities perfect for a leisure. The design and accent of the room emits an exquisite ambiance and gives a focused and diversion-free environment accompanied with serene views from the room window."
    },
    {
      img: img5,
      title: "DIPLOMATIC SUITE",
      desc: "The Diplomatic Suites are stately with breathtaking views and luxurious interior finishing. The suite has LED TVs, a separate lounge, bar and dining area for guests."
    },
  ];
  


  return (
    <div>
      <div>

        <div
          id="hotelSlider"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hotelSlider"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#hotelSlider"
              data-bs-slide-to="1"
            ></button>
          </div>

          {/* Images */}
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src={img3}
                className="d-block w-100"
                alt="slide 1"
                style={{ height: '100vh', objectFit: 'cover' }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="slide 2"
                style={{ height: '100vh', objectFit: 'cover' }}
              />
            </div>

          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hotelSlider"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hotelSlider"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        
        </div>

          {/* OVERLAY */}

          <div className="slider-overlay">

            <h1 className="slider-title">
              Beyond Hotels
            </h1>

            <h2 className="slider-text">
              Perfect destination for luxury, comfort, and unforgettable memories.
            </h2>

            {/* <marquee behavior="" direction="">WELCOME TO BEYOND HOTEL</marquee> */}

          </div>
      </div>


      {/* BEYOND SUITES */}
      <section className="suite-section py-5">
        <div className="container-fluid">
          <div className="row">

            {/* Cards */}
            <div className="col-lg-9">
              <div className="row g-4">
                {suiteData.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card suite-card border-0">
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.title}
                      />

                      <div className="card-body">
                        <p>{item.title}</p>
                        <p>{item.desc}</p>

                        <Link to="/" className="read-more">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Text */}
            <div className="col-lg-3 d-flex justify-content-center  align-items-center">
              <div className="vertical-text">
                SUITES
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT US PAGE */}

      <div className='about-us d-flex pe-md-5 text-white' style={{marginLeft: '1rem', marginRight: '1rem', marginTop: '5rem', backgroundColor: '#cda274', padding: '2rem', borderRadius: '10px'}}>
           
            <img 
              src={img} alt="About Us" 
            /> 
             
            <div style={{paddingLeft: '3rem', alignItems: 'center'}}>
                <h1>
                  About Us.<br/>
              </h1>
                <h4 style={{alignItems: 'center'}}>Luxury And Affordable 4 Star Hotel In Enugu</h4> <br/>
                Welcome to Beyond Hotel, where luxury meets comfort in an atmosphere of elegance and              sophistication. Our hotel is designed to provide guests with an unforgettable experience through world-class hospitality, stylish accommodations, and exceptional services.
      
               At Beyond Hotel, every room and suite is thoughtfully furnished with modern amenities, luxurious interiors, and breathtaking views to ensure maximum comfort and relaxation. Guests can enjoy exquisite dining at our fine restaurants, unwind at our premium bar and lounge, or rejuvenate in our state-of-the-art gym and swimming pool.
      
                Whether you are visiting for business or leisure, Beyond Hotel offers the perfect blend of serenity, convenience, and luxury. Our conference halls and meeting rooms are fully equipped for corporate events, while our warm and professional staff are always available to cater to your every need.
      
                Experience elegance beyond expectations at Beyond Hotel — your perfect destination for luxury, comfort, and unforgettable memories.
              </div>
              
              
          </div>

      {/* AMENITIES  */}
      <div className="container py-5">
        <div className="row text-center g-5 mt-2" style={{color: '#cda274', borderRadius: '10px', backgroundColor: '#f8f8f8', padding: '2rem'}}>

          <div className="col-6 col-md-4 col-lg-2">
            <FaCarAlt size={30} />
            <i className="bi bi-car-front amenity-icon"></i>
            <h6>Airport Pick-up</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <BsHouseExclamation size={30} />
            <i className="bi bi-stars amenity-icon"></i>
            <h6>Housekeeper Services</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <CiWifiOn size={30} />
            <i className="bi bi-wifi amenity-icon"></i>
            <h6>Wifi & Internet</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <MdOutlineLocalLaundryService size={30} />
            <i className="bi bi-basket amenity-icon"></i>
            <h6>Laundry Services</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <MdOutlineFreeBreakfast size={30} />
            <i className="bi bi-cup-hot amenity-icon"></i>
            <h6>Breakfast in Bed</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <LiaSwimmingPoolSolid size={30} />
            <i className="bi bi-water amenity-icon"></i>
            <h6>Swimming Pool</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <FaOilWell size={30} />
            <i className="bi bi-heart-pulse amenity-icon"></i>
            <h6>Fitness Center</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <CiMedicalCross size={30} />
            <i className="bi bi-flower1 amenity-icon"></i>
            <h6>Wellness Center</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <CiDeliveryTruck size={30} />
            <i className="bi bi-person-workspace amenity-icon"></i>
            <h6>Concierge Service</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <CiParking1 size={30} />
            <i className="bi bi-p-square amenity-icon"></i>
            <h6>Parking Space</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <MdOutlineRoomService size={30} />
            <i className="bi bi-bell amenity-icon"></i>
            <h6>Room Services</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <GiBarbecue size={30} />
            <i className="bi bi-fire amenity-icon"></i>
            <h6>Barbecue Area</h6>
          </div>

        </div>
      </div>

         
       {/* CONTACT US PAGE */}
       <h2 className="fw-bold" style={{color: '#000', paddingLeft: '30rem'}}>
         CONTACT US
       </h2>
      <div className="container py-5">
      
            <div className="row g-4">
      
              {/* CONTACT FORM CARD */}
              <div className="col-md-6">
                <div className="card shadow border-0 p-4 h-100">
      
                  <h4 className="fw-bold mb-4">
                    GET IN TOUCH
                  </h4>
      
                  <form ref={form} onSubmit={sendEmail}>
      
                    {/* NAME */}
                    <div className="mb-3">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
      
                    {/* EMAIL */}
                    <div className="mb-3">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
      
                    {/* SUBJECT */}
                    <div className="mb-3">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Enter your subject"
                        required
                      />
                    </div>
      
                    {/* MESSAGE */}
                    <div className="mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
      
                    {/* BUTTON */}
                    <button
                      type="submit"
                      className="btn btn-info w-50 text-light  fw-semibold" style={{marginLeft: '25%', borderRadius: '10rem', backgroundColor: '#cda274' }}
                    >
                      Send Message
                    </button>
      
                  </form>
      
                </div>
              </div>
              
      
              {/* CONTACT INFO CARD */}
              <div className="col-md-6">
                <div className="card shadow border-0 p-4 h-100">
      
                  <h4 className="fw-bold mb-4">
                    CONTACT INFO
                  </h4>
      
                  {/* ADDRESS */}
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <FaMapMarkerAlt className="text-danger fs-4 mt-1" />
      
                    <div>
                      <h5 className="fw-semibold">
                        Address
                      </h5>
      
                      <p className="text-secondary mb-0">
                        No 10 Nza Street, Independent Layout, Enugu,
                        Enugu State, Nigeria
                      </p>
                    </div>
                  </div>
      
                  {/* PHONE */}
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <FaPhoneAlt className="text-success fs-4 mt-1" />
      
                    <div>
                      <h5 className="fw-semibold">
                        Phone Number
                      </h5>
      
                      <p className="text-secondary mb-0">
                        +234 806 441 0162
                      </p>
                    </div>
                  </div>
      
                  {/* EMAIL */}
                  <div className="d-flex align-items-start gap-3">
                    <FaEnvelope className="text-primary fs-4 mt-1" />
      
                    <div>
                      <h5 className="fw-semibold">
                        Email Address
                      </h5>
      
                      <p className="text-secondary mb-0">
                        doggedugo@gmail.com
                      </p>
                    </div>
                  </div>
      
                </div>
              </div>
      
                {/* EMBEDDED MAP */}
              <div className="container my-5">
      
              <div className="card shadow border-0 overflow-hidden">
      
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.566146814388!2d7.5184246739742875!3d6.449703924018608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3f7406eee01%3A0x1df6752df6e9288e!2sBeyond%20Hotels!5e0!3m2!1sen!2sng!4v1779573775212!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beyond Hotels Location"
                ></iframe>
      
              </div>
      
            </div>
              
            </div>
            
          </div>

    </div>
  );
}

export default Home