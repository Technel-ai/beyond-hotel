import React from "react";
import {FaFacebookF,  FaInstagram, FaLinkedinIn, FaTwitter,  FaWhatsapp, } from "react-icons/fa";
import {Link} from 'react-router-dom'
  
 
function Footer() {
  return (
    <>
      <footer className="bg-black text-white pt-5 mt-3">
        <div className="container">
          <div className="row text-center text-md-start">

            {/* ADDRESS */}
            <div className="col-md-3 mb-4 border-end border-secondary bg-black">
              <h6 className="text-uppercase text-white mb-4 bg-black justify-content-center">
                Address
              </h6>

              <p className="fw-semibold lh-lg bg-black">
                No 10 Nza Street, 
                Independent Layout, 
                Enugu, Enugu State,
                Nigeria
              </p>
            </div>

            {/* PHONE & EMAIL */}
            <div className="col-md-3 mb-4 border-end border-secondary text-center bg-black">
              <h6 className="text-uppercase text-white mb-3 bg-black justify-content-center">
                Phone
              </h6>

              <p className="fw-semibold bg-black" style={{cursor: 'pointer'}} onClick={() => window.open('tel:+2348064410162')}>
                +234 806 441 0162
              </p>

              <h6 className="text-uppercase text-white  mt-5 mb-3 bg-black justify-content-center">
                Email
              </h6>

              <p className="fw-semibold bg-black" style={{cursor: 'pointer'}} onClick={() => window.open('mailto:doggedugo@gmail.com')}>
                doggedugo@gmail.com
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="Quick-Links col-md-3 mb-4 text-center bg-black col-md-3 mb-4 border-end border-secondary">
              <h6 className="text-uppercase text-white mb-4 bg-black justify-content-center">
                Quick Links 
              </h6>
 
              <ul className="home list-unstyled m-0 p-0 bg-black">
                <li className="mb-2 bg-black">
                  <Link to="/" className="text-white text-decoration-none bg-black">
                    Home
                  </Link> 
                </li>

                <li className="mb-2 bg-black">
                  <Link to="/about" className="text-white text-decoration-none bg-black">
                    About Us
                  </Link>
                </li>


                <li className="mb-2 bg-black">
                  <Link to="/bars" className="text-white text-decoration-none bg-black">
                    Bars
                  </Link>
                </li>


                <li className="mb-2 bg-black">
                  <Link to="/contact" className="text-white text-decoration-none bg-black">
                    Contact Us
                  </Link>
                </li>

                <li className="mb-2 bg-black">
                  <Link to="/restaurant" className="text-white text-decoration-none bg-black">
                    Restaurant
                  </Link>
                </li>

                <li className="mb-2 bg-black">
                  <Link to="/gymPool" className="text-white text-decoration-none bg-black">
                    Gym & Pool
                  </Link>
                </li>

                <li className="bg-black">
                  <Link to="/meetingRoom" className="text-white text-decoration-none bg-black">
                    Meetings Room
                  </Link>  
                </li>
  
                <li className="bg-black">
                  <Link to="/conventionCenter" className="text-white text-decoration-none bg-black">
                    Convention Center
                  </Link>  
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="social-media col-md-3 mb-4 text-center bg-black"> 
              <h6 className="text-uppercase text-white mb-4 bg-black justify-content-center d-flex gap-2">
                Social Media
              </h6>

              <div className=" face d-flex justify-content-center gap-4 fs-4 bg-black">
                <Link to="/" className="text-white">
                  <FaFacebookF />
                </Link>

                <Link to="/" className="text-white">
                  <FaLinkedinIn />
                </Link>

                <Link to="/" className="text-white">
                  <FaInstagram />
                </Link>

                <Link to="/" className="text-white">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-4 py-4 bg-black">
          <div className="container d-flex justify-content-between align-items-center flex-wrap bg-black">
            
            <p className="mb-0 bg-black">
              Copyrights 2026. All rights reserved.
              Beyond Hotel Nza, Enugu
            </p>
            {/* whatsapp */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

