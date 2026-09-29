// import React from 'react'
import { useLocation } from 'react-router-dom'
import { SiBookalope } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import img from '../assets/booking.jpg'
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function BookingDetails() {
    const location = useLocation();
    const booking = location.state || {};
    const navigate = useNavigate();

    // Additional State for guest information
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
 
    const calculateNights = () => {
        if (!booking.checkIn || !booking.checkOut) return 0;

        const checkIn = new Date(booking.checkIn);
        const checkOut = new Date(booking.checkOut);

        const diffTime = checkOut - checkIn;
        const nights = diffTime / (1000 * 60 * 60 * 24);

        return nights > 0 ? nights : 0;
    };

    // const roomMap = {
    //     Presidential: 2,
    //     Diplomatic: 5,
    //     Executive: 4,
    //     Classic: 3,
    //     Standard: 1,
    //     Deluxe: 6,
    // };

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
    const names = fullName.trim().split(/\s+/);

    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || "";

    if (!fullName || !email || !phoneNumber) {
        alert("Please fill in your full name, email and phone number.");
        return;
    }

    try {
        // STEP 1: Create booking
        const response = await fetch(
            "http://127.0.0.1:8000/api/bookings/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    room_type: booking.suiteType,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone_number: phoneNumber,
                    check_in: booking.checkIn,
                    check_out: booking.checkOut,
                    adults: booking.adults,
                    children: booking.children,
                }),
            }
        );

        const data = await response.json();

        console.log("Booking response:", data);

        // Booking failed
        if (!response.ok) {
            const errorMessage =
                typeof data === "object"
                    ? Object.entries(data)
                        .map(([key, value]) => {
                            const message = Array.isArray(value)
                                ? value.join(", ")
                                : value;

                            return `${key}: ${message}`;
                        })
                        .join("\n")
                    : data;

            alert(errorMessage);
            return;
        }

        // STEP 2: Initialize payment
        const paymentResponse = await fetch(
            "http://127.0.0.1:8000/api/payments/initialize/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    booking_id: data.id,
                }),
            }
        );

        const paymentData = await paymentResponse.json();

        console.log("Payment response:", paymentData);

        if (!paymentResponse.ok) {
            alert(
                paymentData.detail ||
                paymentData.error ||
                "Unable to initialize payment."
            );
            return;
        }

        if (paymentData.status && paymentData.data?.authorization_url) {
            window.location.href =
                paymentData.data.authorization_url;
        } else {
            alert("Unable to initialize payment.");
        }

    } catch (error) {
        console.error("Booking error:", error);
        alert("Something went wrong. Please try again.");
    }
};
    return (
        <div className="container py-5">
            <div className="row g-5 shadow">

                {/* TRAIL CARD */}
                <br />
                <div className="col-md-6 border-0 p-4 h-100 bg-light">
                    <div className="card-body">
                        <h4 className="card-title" style={{ color: '#cda274' }}>Reservation Summary</h4>
                        <br />
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
                        <br />
                        <br />
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
                <br />
                <div className="col-md-6 border-0 p-4 h-100 my-2" style={{ backgroundColor: '#cda274' }}>
                    <div className="card-body">
                        <FaRegUser size={30} color={'#f3f1ee'} />
                        <h4 className="card-title" style={{ color: '#fff' }}>Guest Information</h4>

                        <div className="d-flex flex-column gap-3">
                            <hr />

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                {/* <label className="form-label">Email Address*</label> */}
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                {/* <label className="form-label">Phone Number*</label> */}
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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

                            <button
                                onClick={handleBooking}
                                className="btn btn-primary w-50 align-content-center text-dark"
                                style={{ backgroundColor: "#fff", cursor: "pointer" }}
                            >
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