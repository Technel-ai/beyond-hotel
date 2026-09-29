import { useEffect, useState } from "react";
import axios from "axios";
import RoomDashboard from "../components/RoomDashboard";


function AdminDashboard() {
    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/payments/dashboard/"
                );

                setDashboard(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDashboard();
    }, []);

    if (!dashboard) {
        return (
            <h3 className="text-center mt-5">
                Loading Dashboard...
            </h3>
        );
    }

// Available Rooms, occupied: {dashboard.available_rooms}
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/dashboard/statistics/")
            .then((response) => {
                setStats(response.data);
            });
    }, []);


    return (
        <div className="container py-5">

            <h2 className="mb-4">
                Beyond Hotel Revenue Dashboard
            </h2>


        {/* // Summary Cards. Room status */}

            <div className="row g-4">

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Total Revenue</h6>
                        <h2 className="text-success">
                            ₦{Number(dashboard.total_revenue).toLocaleString()}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Paid Bookings</h6>
                        <h2 className="text-primary">
                            {dashboard.total_bookings}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Available Rooms</h6>
                        <h2 className="text-success">
                            {dashboard.available_rooms}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Occupied Rooms</h6>
                        <h2 className="text-danger">
                            {dashboard.occupied_rooms}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Maintenance Rooms</h6>
                        <h2 className="text-warning">
                            {dashboard.maintenance_rooms}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow border-0 p-4">
                        <h6>Total Rooms</h6>
                        <h2>
                            {dashboard.total_rooms}
                        </h2>
                    </div>
                </div>

            </div>

            {/* Available Rooms, Occupied Rooms, Today's Check-ins, Today's Check-outs */}
            
            <div className="row mb-4">

                <div className="col-md-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h6>Available Rooms</h6>
                            <h2>{stats.available_rooms}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h6>Occupied Rooms</h6>
                            <h2>{stats.occupied_rooms}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h6>Today's Check-ins</h6>
                            <h2>{stats.todays_checkins}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h6>Today's Check-outs</h6>
                            <h2>{stats.todays_checkouts}</h2>
                        </div>
                    </div>
                </div>

            </div>

            
        {/* // Revenue by Room Type Table */}
            <div className="card shadow mt-5">

                <div className="card-header">
                    <h4>Revenue by Room Type</h4>
                </div>

                <div className="card-body">

                    <table className="table table-striped">

                        <thead>
                            <tr>
                                <th>Room Type</th>
                                <th>Bookings</th>
                                <th>Total Revenue</th>
                            </tr>
                        </thead>

                        <tbody>

                            {dashboard.revenue_rooms?.map((room) => (

                                <tr key={room.room__room_type}>

                                    <td>{room.room__room_type}</td>

                                    <td>{room.bookings}</td>

                                    <td>
                                        ₦{Number(room.revenue).toLocaleString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        {/* // Room Management */}
            <div className="mt-5">

                <h3 className="mb-4">
                    Room Management
                </h3>

                <RoomDashboard />

            </div>

        </div>
    );
}

export default AdminDashboard;