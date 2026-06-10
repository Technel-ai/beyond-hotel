import React, {useState} from 'react'
import api from '../services/api';
 
const ResendVerification = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await api.post('api/accounts/resend-verification/', { 
                email 
            });
            setMessage('Verification email sent successfully. Please check your inbox.');
        } 
        catch (error) {
            setMessage('Failed to send verification email. Try again later.', error);
        }
    };


  return (
    <div style= {{width: '100%', height: '91vh', backgroundColor: 'rgb(230, 230, 230)'}}>
        <div className='d-flex justify-content-center align-items-center' style={{width: "100%", height: '100%'}}>
            <div className='card border border-0 text-center p-5' style={{width: '50rem', minHeight: "10rem", boxShadow: "0 0 20px rgb(0, 0, 0, 0.5)"}}>
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>                
                    <input
                        type="email"
                        className="form-control w-50 mx-auto"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />               
                    <button className="btn btn-primary w-25 mx-auto">
                        Resend Verification Email 
                    </button>
                </form>

                {message && (
                    <p className='mt-4 text-center text-secondary'>
                        {message}
                    </p>
                )}    
            </div>
        </div>
    </div>
  )
}

export default ResendVerification
