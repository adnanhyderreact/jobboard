export default function PageTitle({title}) {
    return (
        <>
            <section className="page-title title-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <h2>{title}</h2>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </section>
        </>
    )
}