import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaPrint, FaDownload } from "react-icons/fa";
import "./styles/PaymentSuccess.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import img from '../assets/beyond-hotel-logo.jpeg'


function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const reference = searchParams.get("reference");

    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(true);


  const handleDownload = () => {
    const doc = new jsPDF();

    const logo = new Image();
    logo.src = img; 

    logo.onload = () => { 

        // Logo
        doc.addImage(logo, "PNG", 80, 10, 50, 50);

        // Hotel Name
        doc.setFontSize(22);
        doc.setTextColor(13, 110, 253);
        doc.text("BEYOND HOTEL", 105, 66, { align: "center" });

        doc.setFontSize(11);
        doc.setTextColor(80);
        doc.text("Luxury is Affordable", 105, 72, { align: "center" });

        doc.setDrawColor(180);
        doc.line(15, 80, 195, 80);

        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.text("PAYMENT RECEIPT", 105, 92, { align: "center" });
        
        autoTable(doc, {
            startY: 102,
            margin: { left: 20, right: 20 },
            theme: "grid",
            head: [["Description", "Value"]],
            body: [
                ["Booking Reference", booking.reference],
                ["Guest Name", booking.guest_name],
                ["Phone Number", booking.phone],
                ["Room Type", booking.room_type],
                ["Room Number", booking.room_number],
                [
                    "Check-In Date",
                    new Date(booking.check_in).toLocaleDateString()
                ],
                [
                    "Check-Out Date",
                    new Date(booking.check_out).toLocaleDateString()
                ],
                ["Number of Nights", booking.nights],
                ["Payment Status", booking.status.toUpperCase()],
                ["Customer Email", details.customer.email],
                [
                    "Amount Paid",
                    `NGN ${(details.amount / 100).toLocaleString()}`
                ],
                ["Payment Method", "Paystack"],
                ["Currency", details.currency],
                [
                    "Payment Date",
                    new Date(details.created_at).toLocaleString()
                ],
            ],
        },
    );

        const finalY = doc.lastAutoTable.finalY + 20;

        doc.setFontSize(12);
        doc.text(
            "Thank you for choosing Beyond Hotel.",
            105,
            finalY,
            { align: "center" }
        );

        doc.setFontSize(11);

        doc.text(
            "No. 10 Nza Street, Independent Layout, Enugu, Nigeria",
            105,
            finalY + 10,
            { align: "center" }
        );

        doc.text(
            "+234 806 441 0162   |   doggedugo@gmail.com",
            105,
            finalY + 18,
            { align: "center" }
        );

        doc.save(`Receipt-${details.reference}.pdf`);
    };
};
    useEffect(() => {
        if (!reference) return;

        fetch(`http://127.0.0.1:8000/api/payments/verify/${reference}/`)
            .then((res) => res.json())
            .then((data) => {
                setPayment(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [reference]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <h3>Verifying Payment...</h3>
            </div>
        );
    }

    if (!payment) {
        return (
            <div className="text-center py-5">
                <h3>Unable to verify payment.</h3>
            </div>
        );
    }

    const details = payment.payment;
    const booking = payment.booking;

    return (
        <div className="payment-success-container">

            <div className="receipt-card" id="receipt">

                <FaCheckCircle className="success-icon" />

                <h1>Payment Successful</h1>

                <p className="thank-you">
                    Thank you for choosing Beyond Hotel.
                </p>

                <hr />

                <div className="receipt-row">
                    <span>Booking Reference</span>
                    <strong>{details.reference}</strong>
                </div>

                <div className="receipt-row">
                    <span>Guest Name</span>
                    <strong>{booking.guest_name}</strong>
                </div>

                <div className="receipt-row">
                    <span>Phone Number</span>
                    <strong>{booking.phone}</strong>
                </div>

                <div className="receipt-row">
                    <span>Room Type</span>
                    <strong>{booking.room_type}</strong>
                </div>

                <div className="receipt-row">
                    <span>Room Number</span>
                    <strong>{booking.room_number}</strong>
                </div>

                <div className="receipt-row">
                    <span>Check-In Date</span>
                    <strong>
                        {new Date(booking.check_in).toLocaleDateString()}
                    </strong>
                </div>

                <div className="receipt-row">
                    <span>Check-Out Date</span>
                    <strong>
                        {new Date(booking.check_out).toLocaleDateString()}
                    </strong>
                </div>

                <div className="receipt-row">
                    <span>Number of Nights</span>
                    <strong>{booking.nights}</strong>
                </div>

                <div className="receipt-row">
                    <span>Payment Status</span>
                    <strong className="paid">PAID</strong>
                </div>

                <div className="receipt-row">
                    <span>Email</span>
                    <strong>{details.customer.email}</strong>
                </div>

                <div className="receipt-row">
                    <span>Amount Paid</span>
                    <strong>
                        ₦{(details.amount / 100).toLocaleString()}
                    </strong>
                </div>

                <div className="receipt-row">
                    <span>Payment Method</span>
                    <strong>Paystack</strong>
                </div>

                <div className="receipt-row">
                    <span>Currency</span>
                    <strong>{details.currency}</strong>
                </div>

                <div className="receipt-row">
                    <span>Payment Date</span>
                    <strong>
                        {new Date(details.created_at).toLocaleString()}
                    </strong>
                </div>

                <hr />

                <div className="button-group" id= 'receipt-buttons'>

                    <button
                        className="receipt-btn"
                        onClick={() => window.print()}
                    >
                        <FaPrint />
                        Print Receipt
                    </button>

                    <button
                        className="receipt-btn"
                        onClick= {handleDownload}
                    >
                        <FaDownload />
                        Download Receipt
                    </button>

                    <Link to="/" className="receipt-btn home-btn">
                        <FaHome />
                        Return Home
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default PaymentSuccess;