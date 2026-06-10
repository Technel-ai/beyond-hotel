import React, {useState} from 'react'
import api from '../services/api'
import img from '../assets/register-blog.jpg';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Signup() {

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData(e.currentTarget);

  try {
    await api.post(`api/accounts/register/`, form)
        

      alert("Registration successful. Check your email to verify your account");
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <div style={{ width: "100%", height: "89.3vh" }}>
      <div className="row align-items-center">
        <div className="col-md-5 ps-4">
          <h2 className='text-center mb-5 ms-3'>Register Here</h2>
          <form onSubmit={handleSubmit}>

            <label htmlFor="" className='form-label'>First Name</label>
            <input type="text" className='form-control mb-3' name='first_name' />

            <label htmlFor="" className='form-label'>Last Name</label>
            <input type="text" className='form-control mb-3' name='last_name' />

            <label htmlFor="" className='form-label'>Email</label>
            <input type="email" className='form-control mb-3' name='email' />

            <label htmlFor="" className='form-label'>Password</label>
            <div className="position-relative">
              <input type={showPassword ? "text" : "password"} className='form-control mb-3' name='password' />


              <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", top: "15%", right: "2%", cursor: "pointer" }}>
                {showPassword ? <FaRegEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>

            <button className='w-100 mx-auto login-btn my-4' type='Submit'>Register</button>
          </form>

          <div>
            <p className='my-2 text-secondary text-center'>
              If you already have an account,
              <span><Link to="/login" className='text-black fw-medium'> Click here</Link></span> to login.
            </p>
          </div>

        </div>
        <div className="col-md-7">
          <img src={img} alt="Register" className='register-pic' />
        </div>
      </div>
    </div>
  )
}

export default Signup