import { Link, Outlet } from "react-router-dom";
import {
    FaChartLine,
    FaBed,
    FaClipboardList,
    FaUsers,
    FaMoneyBillWave,
    FaHotel,
} from "react-icons/fa";

function AdminLayout() {
    return (
        <div className="d-flex">

            {/* Sidebar */}

            <div
                className="bg-dark text-white p-4"
                style={{
                    width: "260px",
                    minHeight: "100vh",
                }}
            >
                <h3 className="mb-5">
                    <FaHotel className="me-2" />
                    Beyond Hotel
                </h3>

                <ul className="nav flex-column">

                    <li className="nav-item mb-3">
                        <Link
                            to="/admin"
                            className="nav-link text-white"
                        >
                            <FaChartLine className="me-2" />
                            Dashboard
                        </Link>
                    </li>

                    <li className="nav-item mb-3">
                        <Link
                            to="/admin/rooms"
                            className="nav-link text-white"
                        >
                            <FaBed className="me-2" />
                            Rooms
                        </Link>
                    </li>

                    <li className="nav-item mb-3">
                        <Link
                            to="/admin/bookings"
                            className="nav-link text-white"
                        >
                            <FaClipboardList className="me-2" />
                            Bookings
                        </Link>
                    </li>

                    <li className="nav-item mb-3">
                        <Link
                            to="/admin/guests"
                            className="nav-link text-white"
                        >
                            <FaUsers className="me-2" />
                            Guests
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/admin/payments"
                            className="nav-link text-white"
                        >
                            <FaMoneyBillWave className="me-2" />
                            Payments
                        </Link>
                    </li>

                </ul>

            </div>

            {/* Main Content */}

            <div
                className="flex-grow-1"
                style={{
                    background: "#f5f6fa",
                    minHeight: "100vh",
                }}
            >
                {/* Header */}

                <div className="bg-white shadow-sm p-3 mb-4">

                    <h4 className="mb-0">
                        Beyond Hotel Admin Panel
                    </h4>

                </div>

                {/* Dynamic Pages */}

                <div className="container-fluid">

                    <Outlet />

                </div>

            </div>

        </div>
    );
}

export default AdminLayout;