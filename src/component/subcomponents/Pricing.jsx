export default function Pricing() {
    return (
        <>
            <section className="pricing-section pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Buy Our Plans & Packages</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="price-card">
                                <div className="price-top">
                                    <h3>Free Forever</h3>
                                    <i className='bx bx-user'></i>
                                    <h2>0<sub>/Month</sub></h2>
                                </div>

                                <div className="price-feature">
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Appear in results
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <strong>Accept mobile app</strong>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Manage canditates directly
                                        </li>
                                    </ul>
                                </div>

                                <div className="price-btn">
                                    <a href="post-job.html">Find A Job</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="price-card mt-12">
                                <div className="price-top">
                                    <h3>Sponsor</h3>
                                    <i className='bx bx-user'></i>
                                    <h2>10<sub>/Month</sub></h2>
                                </div>

                                <div className="price-feature">
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Premium placement
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <strong>PPC on your job</strong>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Reach more candidates
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Desktop, mobile job alerts
                                        </li>
                                    </ul>
                                </div>

                                <div className="price-btn">
                                    <a href="post-job.html">Find A Job</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="price-card">
                                <div className="price-top">
                                    <h3>Premium Plan</h3>
                                    <i className='bx bx-user'></i>
                                    <h2>30<sub>/Month</sub></h2>
                                </div>

                                <div className="price-feature">
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Job ad live for six-weeks
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <strong>Premium placement</strong>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Desktop, mobile job alerts
                                        </li>
                                    </ul>
                                </div>

                                <div className="price-btn">
                                    <a href="post-job.html">Find A Job</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}