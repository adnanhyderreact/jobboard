import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {logIn} from "../../helper/global";

export default function SignIn() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: 'kminchelle',
                password: password,
            });

            if (logIn(response.data)) {
                navigate('/dashboard');
            }
        } catch (error) {
            setError('Invalid email or password. Please try again.'); // Handle error states as needed
        }
    }
    return (
        <>
            <section className=" pb-70">
                <div className="signin-section ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                                <form className="signin-form" onSubmit={handleSignIn}>
                                    {error && <p>{error}</p>}
                                    <div className="form-group">
                                        <label>Enter Email</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" value={password} className="form-control"
                                               placeholder="Enter Your Password" required=""
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    <div className="signin-btn text-center">
                                        <button type="submit">Sign In</button>
                                    </div>

                                    <div className="other-signin text-center">
                                        <span>Or sign in with</span>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="bx bxl-google"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="create-btn text-center">
                                        <p>Not have an account?
                                            <a href="signup.html">
                                                Create an account
                                                <i className="bx bx-chevrons-right bx-fade-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}