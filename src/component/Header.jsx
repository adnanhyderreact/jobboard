import PreLoader from "./PreLoader";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <PreLoader/>
            <div className="navbar-area">
              {/*Menu For Mobile Device*/}
                <div className="mobile-nav">
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo.png" alt="logo" />
                    </a>
                </div>

               {/*Menu For Desktop Device */}
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">

                                        <Link to='/' className="nav-link dropdown-toggle active">Home</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="index.html" className="nav-link active">Home One</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-two.html" className="nav-link">Home Two</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-three.html" className="nav-link">Home Three</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-four.html" className="nav-link">Home Four</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-five.html" className="nav-link">Home Five</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/about' className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Jobs</a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="find-job.html" className="nav-link">Find A Job</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="post-job.html" className="nav-link">Post A Job</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="job-list.html" className="nav-link">Job List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="job-grid.html" className="nav-link">Job Grid</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="job-details.html" className="nav-link">Job Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Candidates</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="candidate.html" className="nav-link">Candidates</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="candidate-details.html" className="nav-link">Candidates
                                                    Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="company.html" className="nav-link">Company</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pricing.html" className="nav-link">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link dropdown-toggle">Profile</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="account.html" className="nav-link">Account</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link dropdown-toggle">Member</a>

                                                        <ul className="dropdown-menu">
                                                            <li className="nav-item">
                                                                <a href="sign-in.html" className="nav-link">Sign In</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="sign-up.html" className="nav-link">Sign Up</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="reset-password.html" className="nav-link">Reset
                                                                    Password</a>
                                                            </li>
                                                        </ul>
                                                        <li>
                                                            <li className="nav-item">
                                                                <a href="resume.html" className="nav-link">Resume</a>
                                                            </li>
                                                        </li>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="404.html" className="nav-link">404 Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="testimonial.html" className="nav-link">Testimonials</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="faq.html" className="nav-link">FAQ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">Catagories</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="privacy-policy.html" className="nav-link">Privacy & Policy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="terms-condition.html" className="nav-link">Terms &
                                                    Conditions</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="blog.html" className="nav-link">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="blog-two" className="nav-link">Blog Two</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="blog-details.html" className="nav-link">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">Contact Us</a>
                                    </li>
                                </ul>

                                <div className="other-option">
                                    <a href="sign-up.html" className="signup-btn">Sign Up</a>
                                    <a href="sign-in.html" className="signin-btn">Sign In</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}