import React from 'react'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookings from './components/Bookings'
import BookingCard from './components/BookingCard'
import BookingDetails from './components/BookingDetails'



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
const Resturant = React.lazy(() => import("./pages/Resturant"))
const MeetingRoom = React.lazy(() => import("./pages/MeetingRoom"))
const ConventionCenter = React.lazy(() => import("./pages/ConventionCenter"))
// const BookingCard = React.lazy(() => import("./pages/BookingCard"))




function App() { 
  return (
    <div>
      <React.Suspense
        fallback={<div style= {{width: '100%', height: '100vh'}}>
          <Loading/>         
        </div>}       
      >
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/luxuryDeluxe' element={<LuxuryDeluxe/>} />
            <Route path='/standardSuite' element={<StandardSuite/>} />
            <Route path='/executiveSuite' element={<ExecutiveSuite/>} />
            <Route path='/classicSuite' element={<ClassicSuite/>} />
            <Route path='/diplomaticSuite' element={<DiplomaticSuite/>} />
            <Route path='/presidentialSuite' element={<PresidentialSuite/>} />
            <Route path="/bars" element={<Bars />} />
            <Route path="/gymPool" element={<GymPool />} />
            <Route path="/restaurant" element={<Resturant />} />
            <Route path="/meetingRoom" element={<MeetingRoom />} />
            <Route path="/conventionCenter" element={<ConventionCenter />} />
            <Route path="/resturant" element={<Resturant />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookingCard" element={<BookingCard />} />
            <Route path="/bookingDetails" element={<BookingDetails />} />
          </Routes>
          {/* <Bookings /> */}
          <Footer/>
          <GetInTouch />
          
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App