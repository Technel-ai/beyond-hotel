import { useEffect, useState } from "react";
import axios from "axios";

function RoomDashboard() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/rooms/dashboard/")
            .then((response) => {
                console.log("Number of rooms:", response.data.length);
                console.log(response.data);
                setRooms(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const badgeColor = (status) => {

        if (status === "available")
            return "success";

        if (status === "occupied")
            return "danger";

        return "warning";
    };

    return (

        <div className="container mt-5">

            <div className="row">

                {rooms.map((room) => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={room.id}
                    >

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <div className="d-flex justify-content-between">

                                    <h4>
                                        Room {room.room_number}
                                    </h4>

                                    <span
                                        className={`badge bg-${badgeColor(room.status)}`}
                                    >
                                        {room.status}
                                    </span>

                                </div>

                                <h6 className="text-muted mt-2">
                                    {room.room_type}
                                </h6>

                                <hr />

                                <p>

                                    <strong>Capacity:</strong>

                                    {" "}

                                    {room.capacity}

                                </p>

                                <p>

                                    <strong>Price:</strong>

                                    ₦{Number(room.price).toLocaleString()}

                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default RoomDashboard;