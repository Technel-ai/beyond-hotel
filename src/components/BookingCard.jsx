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

import { useEffect, useState } from "react";
import axios from "axios";


const roomImages = {
    Presidential: img7,
    Diplomatic: img4,
    Executive: img5,
    Classic: img2,
    Standard: img8,
    Deluxe: img3,
    "Convention Center": img,
    "Meeting Hall": img6,
};


const roomDescriptions = {
    Presidential:
        "Our Presidential Suite offers luxury, elegance and premium comfort for distinguished guests.",

    Diplomatic:
        "Our Diplomatic Suite is spacious with elegant interior fittings for families and executives.",

    Executive:
        "Our Executive Suite provides comfort, style and modern facilities for business travelers.",

    Classic:
        "Our Classic Suite combines affordability with luxury for a relaxing stay.",

    Standard:
        "Our Standard Suite is comfortable, spacious and suitable for everyday travelers.",

    Deluxe:
        "Our Deluxe Suite provides luxury accommodation with modern amenities.",

    "Convention Center":
        "Perfect for conferences, seminars, weddings and large events.",

    "Meeting Hall":
        "Ideal for meetings, workshops and corporate presentations.",
};

function BookingCard() {

  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state 

  const [rooms, setRooms] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

    const fetchAvailableRooms = async () => {

        try {

            const response = await axios.get(
                `http://127.0.0.1:8000/api/rooms/available/`,
                {
                    params: {
                        check_in: bookingData.checkIn,
                        check_out: bookingData.checkOut,
                    },
                }
            );

            setRooms(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    fetchAvailableRooms();

}, [bookingData]);

 
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

{loading ? (

    <h3 className="text-center">
        Loading available rooms...
    </h3>

) : rooms.length === 0 ? (

    <div className="text-center">

        <h2>No rooms available</h2>

        <p>
            Please choose different dates.
        </p>

    </div> 

) : ( 


    rooms.map((room) => (

        <div
            key={room.room_type}
            className="row align-items-center mb-5 g-4"
        >

            <div className="col-lg-6">

                <div className="position-relative">

                    <img
                        src={roomImages[room.room_type]}
                        alt={room.room_type}
                        className="img-fluid w-100"
                    />

                    <span
                        className="position-absolute top-0 start-0 bg-white px-3 py-2 shadow-sm"
                        style={{ margin: "20px" }}
                    >
                        ₦{Number(room.price).toLocaleString()}
                    </span>

                </div>

            </div>

            <div className="col-lg-6">

                <h2>{room.room_type}</h2>

                <p className="text-success fw-bold">

                    {room.available_rooms} room(s) available

                </p>

                <p className="text-muted">

                    Pool / Gym / Bar / Free WiFi

                </p>

                <p className="room-text">

                    {roomDescriptions[room.room_type]}

                </p>

                <button
                    className="book-btn"
                    onClick={() =>
                        handleSuiteSelection(
                            room.room_type,
                            Number(room.price)
                        )
                    }
                >
                    Book Now
                </button>

            </div>

        </div>

    ))

)}

  </div>
);

}

export default BookingCard;