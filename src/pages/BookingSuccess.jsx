import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function BookingSuccess() {

    const location = useLocation();
    const booking = location.state?.booking;

    if (!booking) {
        return (
            <div className="container py-5 text-center">
                <h3>No booking information found.</h3>

                <Link to="/" className="btn btn-primary mt-3">
                    Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div
                className="card shadow-lg border-0 mx-auto"
                style={{ maxWidth: "700px" }}
            >

                <div className="card-body p-5 text-center">

                    <FaCheckCircle
                        size={90}
                        color="green"
                    />

                    <h2 className="mt-3">
                        Booking Successful!
                    </h2>

                    <p className="text-muted">
                        Thank you for choosing Beyond Hotel.
                    </p>

                    <hr />

                    <div className="text-start">

                        <p>
                            <strong>Booking Reference:</strong>{" "}
                            {booking.booking_reference}
                        </p>

                        <p>
                            <strong>Guest:</strong>{" "}
                            {booking.first_name} {booking.last_name}
                        </p>

                        <p>
                            <strong>Email:</strong>{" "}
                            {booking.email}
                        </p>

                        <p>
                            <strong>Check In:</strong>{" "}
                            {booking.check_in}
                        </p>

                        <p>
                            <strong>Check Out:</strong>{" "}
                            {booking.check_out}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {booking.status}
                        </p>

                        <p>
                            <strong>Suite:</strong> {booking.room_name || booking.suiteType}
                        </p>
                        
                        <p>
                            <strong>Nights:</strong> {booking.nights}
                        </p>

                        <p>
                            <strong>Guests:</strong> {booking.adults} Adult(s), {booking.children} Child(ren)
                        </p>
                        
                        <p>
                            <strong>Total Amount:</strong>{" "}
                            ₦{Number(booking.total_amount).toLocaleString()}
                        </p>

                    </div>

                    <hr />

                    <Link
                        to="/"
                        className="btn btn-dark me-3"
                    >
                        Return Home
                    </Link>

                    <button
                        className="btn btn-warning"
                    >
                        Proceed to Payment
                    </button>

                </div>

            </div>

        </div>
    );
}

export default BookingSuccess;