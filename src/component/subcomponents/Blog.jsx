import BlogCards from "./BlogCards";

export default function Blog({items}) {

    return (
        <>
            <section className="blog-section pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>News, Tips & Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>

                    <div className="row">
                        {BlogCards({items})}
                    </div>
                </div>
            </section>
        </>
    )
}