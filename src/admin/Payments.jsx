import { useEffect, useState } from "react";
import axios from "axios";


function Payments() {

    const [payments, setPayments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/payments/list/")
            .then((response) => {
                setPayments(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (

        <div>

            <h2 className="mb-4">Payments</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by guest name or reference..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>S/N</th>

                        <th>Reference</th>

                        <th>Guest</th>

                        <th>Room No.</th>

                        <th>Suite</th>

                        <th>Amount (₦)</th>

                        <th>Status</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {payments.filter((payment) => 
                        payment.guest.toLowerCase().includes(search.toLowerCase()) ||
                        payment.reference.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((payment, index) => (

                        <tr key={payment.id}>

                            <td>{index + 1}</td>

                            <td>{payment.reference}</td>

                            <td>{payment.guest}</td> 

                            <td>{payment.room_number}</td>

                            <td>{payment.room_type}</td>

                            <td>
                                ₦{Number(payment.amount).toLocaleString()}
                            </td>

                            <td>
                                <span className="badge bg-success">
                                    {payment.status}
                                </span>
                            </td>

                            <td>{payment.date}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Payments;