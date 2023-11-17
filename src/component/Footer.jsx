export default function Footer() {
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" alt="logo" />
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                                    incididunt ut labore et dolore magna. Sed eiusmod tempor incididunt ut.</p>

                                <div className="footer-social">
                                    <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                                    <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                                    <a href="#" target="_blank"><i className='bx bxl-pinterest-alt'></i></a>
                                    <a href="#" target="_blank"><i className='bx bxl-linkedin'></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget pl-60">
                                <h3>For Candidate</h3>
                                <ul>
                                    <li>
                                        <a href="job-grid.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Browse Jobs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catagories.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Browse Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="resume.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Resume
                                        </a>
                                    </li>
                                    <li>
                                        <a href="job-list.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Job List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sign-up.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Sign Up
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget pl-60">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="privacy.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className='bx bx-chevrons-right bx-tada'></i>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget footer-info">
                                <h3>Information</h3>
                                <ul>
                                    <li>
									<span>
										<i className='bx bxs-phone'></i>
										Phone:
									</span>
                                        <a href="tel:882569756">
                                            +101 984 754
                                        </a>
                                    </li>

                                    <li>
									<span>
										<i className='bx bxs-envelope'></i>
										Email:
									</span>
                                        <a href="mailto:info@jovie.com">
                                            info@jovie.com
                                        </a>
                                    </li>

                                    <li>
									<span>
										<i className='bx bx-location-plus'></i>
										Address:
									</span>
                                        123, Denver, USA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright-text text-center">
                <p>Copyright @2021 Jovie. All Rights Reserved By </p>
            </div>
        </>
    )
}