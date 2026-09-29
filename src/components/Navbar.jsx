import React from 'react'
import img from '../assets/beyond-hotel-logo.jpeg'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div>
        <nav
            className="navbar navbar-expand-sm navbar-white fw-semibold" 
        >
            <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={img} alt="beyond-hotel-logo.jpeg"/>
                </Link> 
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item" style={{color: '#fff'}}>
                            <Link className="nav-link active text-light fw-semibold" to="/" aria-current="page">
                                HOME
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light fw-semibold" to="/about" aria-current="page">
                                ABOUT US
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        
                        
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-light fw-semibold"
                                to="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >BEYOND SUITES
                            </Link>
                            
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <Link className="dropdown-item" to="/luxuryDeluxe">
                                    LUXURY DELUXE ROOM
                                </Link>
                                <Link className="dropdown-item" to="/standardSuite">
                                    STANDARD SUITE
                                </Link>
                                <Link className="dropdown-item" to="/executiveSuite">
                                    EXECUTIVE SUITE
                                </Link>
                                <Link className="dropdown-item" to="/classicSuite">
                                    CLASSIC SUITE
                                </Link>
                                <Link className="dropdown-item" to="/diplomaticSuite">
                                    DIPLOMATIC SUITE
                                </Link>
                                <Link className="dropdown-item" to="/presidentialSuite">
                                    PRESIDENTIAL SUITE
                                </Link>
                                
                            </div>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-light fw-semibold"
                                to="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >OTHER SERVICES
                            </Link>
                            
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <Link className="dropdown-item" to="/conventionCenter">
                                    CONVENTION CENTER
                                </Link>
                                <Link className="dropdown-item" to="/meetingRoom">
                                    MEETING ROOM
                                </Link>
                                <Link className="dropdown-item" to="/gymPool">
                                    GYM & POOL
                                </Link>
                                <Link className="dropdown-item" to="/bars">
                                    BARS
                                </Link>
                                <Link className="dropdown-item" to="/restaurant">
                                    RESTAURANT
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light fw-semibold" to="/contact" aria-current="page">
                                CONTACT US
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        
                    </ul>

                    {/* BOOK NOW BUTTON */}
                    <form className="d-flex my-2 my-lg-0">
                          <li className="nav-item list-unstyled">
                              <button className="book-btn1">
                                  <Link className="nav-link active" to="/Bookings" aria-current="page">
                                      Book Now
                                      <span className="visually-hidden">(current)</span>
                                  </Link>
                              </button>
                          </li>
                    </form>
                </div>
            </div>
            
        </nav>
        {/* <marquee behavior="" direction="">WELCOME TO BEYOND HOTEL</marquee> */}
          <div className="marquee-container">
              <div className="marquee-text">
                 WELCOME TO BEYOND HOTELS WHERE LUXURY IS AFFORDABLE
              </div>
          </div>
    </div>
  )
}

export default Navbar
