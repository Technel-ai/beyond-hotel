import { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/bookings/"
            );

            setBookings(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckIn = async (id) => {
        try {
            await axios.post(
                `http://127.0.0.1:8000/api/bookings/${id}/check-in/`
            );

            fetchBookings();
        } catch (error) {
            console.log(error);
            alert("Check In failed.");
        }
    };

    const handleCheckOut = async (id) => {
        try {
            await axios.post(
                `http://127.0.0.1:8000/api/bookings/${id}/check-out/`
            );

            fetchBookings();
        } catch (error) {
            console.log(error);
            alert("Check Out failed.");
        }
    };

    return (
        <div>
            <h2>Bookings</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Guest</th>
                        <th>Room No.</th>
                        <th>Suite Type</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.booking_reference}</td>

                            <td>
                                {booking.first_name} {booking.last_name}
                            </td>

                            <td>{booking.room_number}</td>

                            <td>{booking.suite_type}</td>

                            <td>
                                <span
                                    className={`badge ${
                                        booking.status === "paid"
                                            ? "bg-success"
                                            : booking.status === "checked_in"
                                            ? "bg-primary"
                                            : booking.status === "checked_out"
                                            ? "bg-secondary"
                                            : "bg-warning text-dark"
                                    }`}
                                >
                                    {booking.status}
                                </span>
                            </td>

                            <td>₦{Number(booking.total_amount).toLocaleString()}</td>

                            <td>
                                {booking.status === "paid" && (
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() =>
                                            handleCheckIn(booking.id)
                                        }
                                    >
                                        Check In
                                    </button>
                                )}

                                {booking.status === "checked_in" && (
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            handleCheckOut(booking.id)
                                        }
                                    >
                                        Check Out
                                    </button>
                                )}

                                {booking.status === "checked_out" && (
                                    <span className="text-success fw-bold">
                                        Completed
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bookings;