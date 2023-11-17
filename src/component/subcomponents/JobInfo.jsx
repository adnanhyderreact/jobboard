export default function JobInfo() {
    return (
        <>
            <div className="job-info-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="looking-job">
                                <div className="media">
                                    <i className='flaticon-group align-self-start mr-3'></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Looking For a Job</h5>
                                        <p>Your next role could be with one of these top leading organizations</p>

                                        <a href="job-list.html">
                                            Apply Now
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="recruiting-card">
                                <div className="media">
                                    <i className='flaticon-resume align-self-start mr-3'></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Are You Recruiting?</h5>
                                        <p>Your next role could be with one of these top leading organizations</p>

                                        <a href="post-job.html">
                                            Apply Now
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}