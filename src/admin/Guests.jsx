import { useEffect, useState } from "react";
import axios from "axios";

function Guests() {

    const [guests, setGuests] = useState([]);

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/bookings/guests/")
            .then((response) => {
                console.log(response.data);
                setGuests(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (

        <div>

            <h2 className="mb-4">Guests</h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>S/N</th>
                        
                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>Room</th>

                        <th>Status</th>

                        <th>Check In</th>

                        <th>Check Out</th>

                    </tr>

                </thead>

                <tbody>

                    {guests.map((guest, index) => (

                        <tr key={guest.id}>

                            <td>{index + 1}</td>

                            <td>{guest.first_name} {guest.last_name}</td>

                            <td>{guest.email}</td>

                            <td>{guest.phone_number}</td>

                            <td>{guest.room}</td>

                            <td>{guest.status}</td>

                            <td>{guest.check_in}</td>

                            <td>{guest.check_out}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Guests;