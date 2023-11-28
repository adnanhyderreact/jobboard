import Layout from "../component/Layout";
import Banner from "../component/subcomponents/Banner";
import Search from "../component/subcomponents/Search";
import WhyChoose from "../component/subcomponents/WhyChoose";
import Category from "../component/subcomponents/Category";
import JobSection from "../component/subcomponents/JobSection";
import Companies from "../component/subcomponents/Companies";
import JobInfo from "../component/subcomponents/JobInfo";
import FeatureCandidate from "../component/subcomponents/FeatureCandidate";
import Counter from "../component/subcomponents/Counter";
import Testimonial from "../component/subcomponents/Testimonial";
import Pricing from "../component/subcomponents/Pricing";
import Blog from "../component/subcomponents/Blog";


export default function Home() {
    return (
        <>
            <Layout>
                <Banner/>
                <Search/>
                <WhyChoose/>
                <Category/>
                <JobSection/>
                <Companies/>
                <JobInfo/>
                <FeatureCandidate/>
                <Counter/>
                <Testimonial/>
                <Pricing/>
                <Blog items={3}/>
            </Layout>
        </>
    )
}