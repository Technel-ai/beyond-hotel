import React from 'react'
import {useLocation} from 'react-router-dom'
import { SiBookalope } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import img from '../assets/booking.jpg'
import {Link} from 'react-router-dom'

function BookingDetails() {
    const location = useLocation();
    const booking = location.state || {};


    const calculateNights = () => {
        if (!booking.checkIn || !booking.checkOut) return 0;

        const checkIn = new Date(booking.checkIn);
        const checkOut = new Date(booking.checkOut);

        const diffTime = checkOut - checkIn;
        const nights = diffTime / (1000 * 60 * 60 * 24);

        return nights > 0 ? nights : 0;
};

    const roomPrices = {
        Presidential: 250000,
        Diplomatic: 230000,
        Executive: 210000,
        Classic: 200000,
        Standard: 180000,
        Deluxe: 170000,
        Convention_Center: 150000,
        Meeting_Hall: 120000,
};

    const nights = calculateNights();


    const totalAmount =
        (booking.price || 0) *
            nights *
            (booking.rooms || 1);


    const handleBooking = async () => {
    const bookingData = {
        ...booking,
        nights,
        rooms: booking.rooms,
        amount: totalAmount,
    };
console.log(booking); 


    await fetch("http://127.0.0.1:8000/api/bookings/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
  });
};    
  return (
      <div className="container py-5">
            <div className="row g-5 shadow">
         
              {/* TRAIL CARD */}
              <br/>
              <div className="col-md-6 border-0 p-4 h-100 bg-light">
                  <div className="card-body">
                      <h4 className="card-title" style={{color: '#cda274'}}>Reservation Summary</h4>
                       <br/>
                      <p>
                          <strong>Check In:</strong> {booking.checkIn}
                      </p>

                      <p>
                          <strong>Check Out:</strong> {booking.checkOut}
                      </p>

                      <p>
                          <strong>Suite Type:</strong> {booking.suiteType}
                      </p>

                      <p>
                          <strong>Number of Nights:</strong> {nights}
                      </p>

                      <p>
                          <strong>Adults:</strong> {booking.adults}
                      </p>

                      <p>
                          <strong>Children:</strong> {booking.children}
                      </p>

                      <p>
                          <strong>Rooms:</strong> {booking.rooms}
                      </p>

                      <h5>
                          Amount: ₦{totalAmount.toLocaleString()}
                      </h5>
                        <br/>
                        <br/>
                      <p>
                          Kindly confirm your reservation details before proceeding.
                        </p>
                        {/* <Link to="" style={{backgroundColor: '#fff' }}>
                            <button>
                              Log in and Continue
                          </button>
                          <button>
                              Continue as a Guest
                          </button>
                        </Link> */}
                          
                        
                        
                  </div>                       
              </div>
              
              {/* GUEST INFO */}
                <br/>
              <div className="col-md-6 border-0 p-4 h-100 my-2" style={{backgroundColor: '#cda274'}}>
                    {/* <img className="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
                    <div className="card-body"> 
                        <FaRegUser size={30} color={'#f3f1ee'}/>
                      <h4 className="card-title" style={{color: '#fff'}}>Guest Information</h4>
                      
                      <div className="d-flex flex-column gap-3">
                          <hr />

                          <div className="mb-3">
                              <label className="form-label">Full Name*</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your full name"
                              />
                          </div> 

                          <div className="mb-3">
                              <label className="form-label">Email Address*</label>
                              <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter your email"
                              />
                          </div>

                          <div className="mb-3">
                              <label className="form-label">Phone Number*</label>
                              <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Enter your phone number"
                              />
                          </div>

                          <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your address"
                              />
                          </div>

                          <div className="mb-3">
                              <label className="form-label">Special Requests</label>
                              <textarea
                                  className="form-control"
                                  rows="4"
                                  placeholder="Any special requests?"
                              ></textarea>
                          </div>

                            <button className="btn btn-primary w-50 align-content-center text-dark" style={{backgroundColor: '#fff', cursor: 'pointer'}}>
                                Proceed to Payment
                            </button>
                      </div>
                  </div>
              </div> 
                
            </div>
        </div>
  )
}

export default BookingDetails