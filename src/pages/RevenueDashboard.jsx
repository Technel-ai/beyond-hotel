// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RoomDashboard from "../components/RoomDashboard";

// function RevenueDashboard() {
//   const [dashboard, setDashboard] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/api/payments/dashboard/"
//       );

//     console.log(response.data);

//       setDashboard(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mt-5">
//         <h3>Loading dashboard...</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">

//       <h2 className="text-center mb-5">
//         Beyond Hotel Revenue Dashboard
//       </h2>

//       <div className="row g-4">

//     <div className="col-lg-3">

//         <div className="card shadow text-center p-4">

//             <h4>Total Revenue</h4>

//             <h2 className="text-success">

//                 ₦{Number(dashboard.total_revenue).toLocaleString()}

//             </h2>

//         </div>

//     </div>

//     <div className="col-lg-3">

//         <div className="card shadow text-center p-4">

//             <h4>Paid Bookings</h4>

//             <h2 className="text-primary">

//                 {dashboard.total_bookings}

//             </h2>

//         </div>

//     </div>

//     <div className="col-lg-3">

//         <div className="card shadow text-center p-4">

//             <h4>Available Rooms</h4>

//             <h2 className="text-success">

//                 {dashboard.available_rooms}

//             </h2>

//         </div>

//     </div>

//     <div className="col-lg-3">

//         <div className="card shadow text-center p-4">

//             <h4>Occupied Rooms</h4>

//             <h2 className="text-danger">

//                 {dashboard.occupied_rooms}

//             </h2>

//         </div>

//     </div>

//     <div className="col-lg-3 mt-4">

//         <div className="card shadow text-center p-4">

//             <h4>Maintenance</h4>

//             <h2 className="text-warning">

//                 {dashboard.maintenance_rooms}

//             </h2>

//         </div>

//     </div>

//     <div className="col-lg-3 mt-4">

//         <div className="card shadow text-center p-4">

//             <h4>Total Rooms</h4>

//             <h2>

//                 {dashboard.total_rooms}

//             </h2>

//         </div>

//     </div>

// </div>

//       <div className="card shadow mt-5">

//         <div className="card-header">
//           <h4 className="mb-0">
//             Revenue By Room Type
//           </h4>
//         </div>

//         <div className="card-body">

//           <table className="table table-striped">

//             <thead>

//               <tr>
//                 <th>Room Type</th>
//                 <th>Bookings</th>
//                 <th>Total Revenue</th>
//               </tr>

//             </thead>

//             <tbody>

//               {dashboard.revenue_rooms?.map((room) => (

//                 <tr key={room.room__room_type}>

//                   <td>{room.room__room_type}</td>

//                   <td>{room.bookings}</td>

//                   <td>
//                     ₦{Number(room.revenue).toLocaleString()}
//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>
//               <RoomDashboard />
//         </div>

//       </div>

//     </div>
//   );
// }

// export default RevenueDashboard;