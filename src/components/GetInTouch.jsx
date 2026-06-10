import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function GetInTouch() {
  return (
    <div className='contact-quick'>
        <Link
              to="https://wa.me/2348064410162"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-light rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                fontSize: "28px",
                position: "fixed",
                bottom: "20px",
                right: "20px",
              }}
            >
              <FaWhatsapp />
            </Link>

          <div>
              <Link
                  to="tel:+2348064410162"
                  className="call-btn"
                  style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '30px',
                    width: '60px',
                    height: '60px',
                    background: '#29864d',
                    color: 'white',
                    borderRadius: '50%',
                    // boxShadow: '0 5px 15px rgba(0,0,0,0.3)',                  
                    display: 'flex',
                    // transition: '0.3s ease',
                    textDecoration: 'none',
                    alignItems: 'center',
                  }}
              >
                  {/* <i className="bi bi-telephone-fill"></i> */}
                  <FaPhoneAlt className='fs-4 gap-3'
                  style={{
                    margin: 'auto',
                  }}
                  />
              </Link>
          </div>
    </div>
  )
}

export default GetInTouch