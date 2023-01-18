import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'
import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

export const SignUp = () => {
    return (
        <div className='body'>
            <div className='container' >
                <div className="row justify-content-center" >
                    <div className="col-sm-4 py-3 bg-color-1 rounded shadow text-light border border-secondary-subtle mb-2" id='cont-login'>
                        <form className='mx-4'>
                            <h1 className='text-center mt-4 mb-1'><FontAwesomeIcon icon={faUmbrella} /><br />
                                <span className='fs-5'>Dark Umbrella</span>
                            </h1>
                            <p className='text-center fs-small opc-1'>Sign Up to be a Member.</p>
                            <hr className='my-4' />
                            <div className="mb-2">
                                <input type="string" placeholder='Username' className="form-control bg-transparent input-text-light" id="username" aria-describedby="usernameHelp" required/>
                            </div>
                            <div className="mb-2">
                                <input type="password" placeholder='Password' className="form-control bg-transparent  input-text-light" id="signUp-pass" required/>
                            </div>
                            
                            <div className="mb-3">
                                <input type="password" placeholder='Confirm password' className="form-control bg-transparent  input-text-light input-hvr" id="signUp-pass-confirm" required/>
                            </div>
                            <p className='fs-small text-center opc-1'>By registering, you agree to our Terms, of
                                <a href="#" className='color-3'> <br />Privacy Policy</a> and 
                                <a href="#" className='color-3'> Cookie Policy</a>.
                            </p>
                            <div className="d-grid gap-2 ">
                                <button className="btn btn-light px-5 mb-3 btn-hover-top color-1 fw-bold" type="button">Sign Up</button>
                            </div >
                            
                        </form>
                    </div>
                    
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 bg-color-1 rounded shadow text-light border border-secondary-subtle">
                        <p className='text-center pt-3'>Have an account? <a href="/login" className='color-3'>Just Log in</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}