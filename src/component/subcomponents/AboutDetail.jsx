export default function AboutDetail() {
    return (
        <>
            <section className="about-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="section-title">
                                    <h2>How We Started</h2>
                                </div>

                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.</p>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="assets/img/about.jpg" alt="about image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}