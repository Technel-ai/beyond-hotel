import React from 'react'
import img from '../assets/about.jpg'
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaConciergeBell,
  FaDumbbell,
  FaUtensils,
  FaShuttleVan,
  FaSpa,
} from "react-icons/fa";

import { MdOutlineLocalLaundryService } from "react-icons/md";




function AboutUs() {
  return (
      
    <div className='about-us d-flex pe-md-5' style={{marginLeft: '1rem', marginRight: '1rem', marginTop: '3rem'}}>
     
      <img 
        src={img} alt="About Us" 
      /> 
       
      <p style={{paddingLeft: '3rem', alignItems: 'center'}}>
          <h1>
            About Us.<br/>
        </h1>
          <h4 style={{alignItems: 'center'}}>Luxury And Affordable 4 Star Hotel In Enugu</h4> <br/>
          Welcome to Beyond Hotel, where luxury meets comfort in an atmosphere of elegance and              sophistication. Our hotel is designed to provide guests with an unforgettable experience through world-class hospitality, stylish accommodations, and exceptional services.

         At Beyond Hotel, every room and suite is thoughtfully furnished with modern amenities, luxurious interiors, and breathtaking views to ensure maximum comfort and relaxation. Guests can enjoy exquisite dining at our fine restaurants, unwind at our premium bar and lounge, or rejuvenate in our state-of-the-art gym and swimming pool.

          Whether you are visiting for business or leisure, Beyond Hotel offers the perfect blend of serenity, convenience, and luxury. Our conference halls and meeting rooms are fully equipped for corporate events, while our warm and professional staff are always available to cater to your every need.

          Experience elegance beyond expectations at Beyond Hotel — your perfect destination for luxury, comfort, and unforgettable memories.
        </p>
        
        
    </div>
  )
}

export default AboutUs