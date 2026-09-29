import React from 'react'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingForm from './components/BookingForm'
import BookingCard from './components/BookingCard'
import BookingDetails from './components/BookingDetails'
import BookingSuccess from "./pages/BookingSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";
import AdminBookings from "./admin/Bookings";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import Rooms from "./admin/Rooms";
import Payments from "./admin/Payments"; 
import Guests from "./admin/Guests";
import PublicLayout from "./layouts/PublicLayout";
import Restaurant from './pages/Restaurant'



const Home = React.lazy(() => import("./pages/Home"))
const ContactUs = React.lazy(() => import("./pages/ContactUs"))
const LuxuryDeluxe = React.lazy(() => import("./pages/LuxuryDeluxe"))
const StandardSuite = React.lazy(() => import("./pages/StandardSuite"))
const ExecutiveSuite = React.lazy(() => import("./pages/ExecutiveSuite"))
const ClassicSuite = React.lazy(() => import("./pages/ClassicSuite"))
const DiplomaticSuite = React.lazy(() => import("./pages/DiplomaticSuite"))
const PresidentialSuite = React.lazy(() => import("./pages/PresidentialSuite"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
const Bars = React.lazy(() => import("./pages/Bars"))
const GymPool = React.lazy(() => import("./pages/GymPool"))
// const BookingDetails = React.lazy(() => import("./components/BookingDetails"))
const MeetingRoom = React.lazy(() => import("./pages/MeetingRoom"))
const ConventionCenter = React.lazy(() => import("./pages/ConventionCenter"))




function App() { 
  return (
    <div>
      <React.Suspense
        fallback={<div style= {{width: '100%', height: '100vh'}}>
          <Loading/>         
        </div>}       
      >
        <BrowserRouter>

          <Routes>

            {/* PUBLIC WEBSITE */}
            <Route element={<PublicLayout />}>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />

              <Route path="/luxuryDeluxe" element={<LuxuryDeluxe />} />
              <Route path="/standardSuite" element={<StandardSuite />} />
              <Route path="/executiveSuite" element={<ExecutiveSuite />} />
              <Route path="/classicSuite" element={<ClassicSuite />} />
              <Route path="/diplomaticSuite" element={<DiplomaticSuite />} />
              <Route path="/presidentialSuite" element={<PresidentialSuite />} />

              <Route path="/bars" element={<Bars />} />
              <Route path="/gymPool" element={<GymPool />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/meetingRoom" element={<MeetingRoom />} />
              <Route path="/conventionCenter" element={<ConventionCenter />} />

              <Route path="/bookings" element={<BookingForm />} />
              <Route path="/bookingCard" element={<BookingCard />} />
              <Route path="/bookingDetails" element={<BookingDetails />} />

              <Route path="/booking-success" element={<BookingSuccess />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />

            </Route>

            {/* ADMIN PANEL */}
            <Route path="/admin" element={<AdminLayout />}>

              <Route index element={<AdminDashboard />} />

              <Route path="rooms" element={<Rooms />} />

              <Route path="bookings" element={<AdminBookings />} />

              <Route path="payments" element={<Payments />} />

              <Route path="guests" element={<Guests />} />

            </Route>

          </Routes>

        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App