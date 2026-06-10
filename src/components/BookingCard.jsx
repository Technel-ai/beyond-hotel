import React from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import img from '../assets/convention-center.jpg'
import img2 from '../assets/classic3.webp'
import img3 from '../assets/deluxe.jpg'
import img4 from '../assets/diploma.webp'
import img5 from '../assets/executive.jpg'
import img6 from '../assets/meeting2.jpg'
import img7 from '../assets/president.jpg'
import img8 from '../assets/standard2.jpeg'


function BookingCard() {

  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state 
 
const handleSuiteSelection = (suiteType, price, rooms) => {
        navigate("/BookingDetails", {
            state: {
                ...bookingData,
                suiteType,
                price,
            },
        });
    };

  return (
    <div className="container py-5">

      {/* Room 1 */}
      <div className="row align-items-center mb-5 g-4">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img7}
              alt="Presidential Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦250,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Presidentail Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            At Beyond Hotel, our Presidential Suite provides an executive
            experience with premium comfort and extra amenities including a
            reading desk and a safety deposit box.
          </p>


           <button className="book-btn" onClick={() => handleSuiteSelection("Presidential", 250000)}>
          Book Now
        </button> 
        </div>
      </div>

      {/* Room 2 */}
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img4}
              alt="Diplomatic Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦230,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Diplomatic Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Diplomatic Suite is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}

        <button className="book-btn" onClick={() => handleSuiteSelection("Diplomatic", 230000)}>
          Book Now
        </button> 
        </div>
      </div>


      {/* Room 3 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img5}
              alt="Executive Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦210,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Executive Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Executive Suite is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}
          <button className="book-btn" onClick={() => handleSuiteSelection("Executive", 210000)}>
            Book Now
          </button>
        </div>
      </div>


      {/* Room 4 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img2}
              alt="Classic Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦200,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Classic Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Classic Suite is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          
          <button className="book-btn" onClick={() => handleSuiteSelection("Classic", 200000)}>
            Book Now
          </button>
        </div>
      </div>


      {/* Room 5 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img8}
              alt="Standard Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦180,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Standard Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Standard Suite is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}
          
          <button className="book-btn" onClick={() => handleSuiteSelection("Standard", 180000)}>
            Book Now
          </button>
        </div>
      </div>


      {/* Room 6 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img3}
              alt="Luxury Deluxe Suite"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦170,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Luxury Deluxe Suite</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Luxury Deluxe Suite is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}

          <button className="book-btn" onClick={() => handleSuiteSelection("Luxury Deluxe", 170000)}>
            Book Now
          </button>
        </div>
      </div>


      {/* Room 7 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img}
              alt="Convention Center"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦150,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Convention Center</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Convention Center is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}

          <button className="book-btn" onClick={() => handleSuiteSelection("Convention Center", 150000)}>
            Book Now
          </button>
        </div>
      </div>



      {/* Room 8 */}
      <div className="row align-items-center g-4 mt-3">
        <div className="col-lg-6">
          <div className="position-relative">
            <img
              src={img6}
              alt="Meeting Hall"
              className="img-fluid w-100"
            />

            <span
              className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
              style={{ margin: "20px" }}
            >
              ₦120,000
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">Meeting Hall</h2>

          <p className="text-muted mb-4">
            Pool / Gym / Bar / Free WiFi
          </p>

          <p className="room-text">
            Our Meeting Hall is spacious with elegant interior fittings.
            Perfect for families and guests seeking extra comfort.
          </p>

          {/* <Link to="/BookingDetails" className="book-link">
            Book Now <span>&#8250;</span>
          </Link> */}

          <button className="book-btn" onClick={() => handleSuiteSelection("Meeting Hall", 120000)}>
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
}

export default BookingCard;