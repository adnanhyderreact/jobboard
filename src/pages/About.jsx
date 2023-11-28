import Layout from "../component/Layout";
import WhyChoose from "../component/subcomponents/WhyChoose";
import Counter from "../component/subcomponents/Counter";
import Testimonial from "../component/subcomponents/Testimonial";
import Blog from "../component/subcomponents/Blog";
import PageTitle from "../component/subcomponents/PageTitle";
import WhyUse from "../component/subcomponents/WhyUse";
import AboutDetail from "../component/subcomponents/AboutDetail";

export default function About() {
    return (
        <>
            <Layout>
                <PageTitle title='About'/>
                <AboutDetail/>
                <WhyChoose/>
                <WhyUse/>
                <Counter/>
                <Testimonial/>
                <Blog/>
            </Layout>
        </>
    )
}