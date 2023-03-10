import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'

import react, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'


export const Login = () => {

   
    };
    return (
        <div className='body'>
            <div className='container' >
                <div className="row justify-content-center" >
                    <div className="col-sm-4 py-3 bg-color-1 rounded shadow text-light border border-secondary-subtle mb-2" id='cont-login'>
                        <form className='mx-4'>
                            <h1 className='text-center mt-4 mb-5'><FontAwesomeIcon icon={faUmbrella} /><br />
                                <span className='fs-5'>Dark Umbrella</span>
                            </h1>                            
                            <div className="mb-2">
                                <input type="email" placeholder='Email' className="form-control bg-transparent input-text-light" id="email" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder='Password' className="form-control bg-transparent  input-text-light" id="signUp-pass" required/>
                            </div>
                            <div className="d-grid gap-2 ">
                                <button type="submit" className="btn btn-light px-5 mb-3 btn-hover-top color-1 fw-bold" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 bg-color-1 rounded shadow text-light border border-secondary-subtle">
                        <p className='text-center pt-3 fs-7'>Don't have an account? <a href="/sign-up" className='color-3'> Just be a Member</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}