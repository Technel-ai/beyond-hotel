import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/api';

const VerifyEmail = () => {

    const {uid, token } = useParams();
    const navigate = useNavigate();

    const [status, setStatus ] = useState("loading");

    useEffect(() => {
        api.get(`api/accounts/verify/${uid}/${token}/`)
        .then(() => {
            setStatus("success");
        })
        .catch(() => {
            setStatus("error");
        });
    }, [uid, token]);

  return (
    <div style={{width: "100%", height: "91vh", backgroundColor: "rgb(230, 230, 230)"}}>
        <div style={{width: "100%", height: "100%"}} className='d-flex justify-content-center align-items-center'>
            <div className="card border border-0 text-center p-5" style={{width: "70rem", minHeight: "10rem", boxshadow: "0 0 20px rgb(0, 0, 0, 0.5"}}>
                {status === "loading" && (
                    <div>
                        <h2 className='display-5 font-semibold mb-3'>Verify Email...</h2>
                        <p className='text-secondary'>Please, wait while we verify your account.</p>
                    </div>
                )}

                {status === "success" && (
                    <div>
                        <h2 className='display-5 font-semibold mb-3'>Email Verified 🎉</h2>
                        <p className='text-secondary mb-5'>Your account has been successfully verified. <span className='text-light font-bold bg-success'>Congratulations!!!</span></p>

                        <button className='btn btn-success' onClick={() => navigate ("/login")}>
                            Go to Login
                        </button>
                    </div>
                )}

                {status == 'error' && (
                    <div>
                        <h2 className='display-5 font-semibold mb-3'>Verification failed</h2>
                        <p className='text-secondary'>Verificationlink is invalid or expired. Please try again.</p>

                        <button onClick={()=> navigate('/resend-verification')} className= 'btn btn-success'>
                            Resend Verification Email
                        </button>
                    </div>
                )} 

            </div>           
            </div>

    </div>
  )
}

export default VerifyEmail