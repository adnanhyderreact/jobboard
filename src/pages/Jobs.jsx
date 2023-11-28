import Layout from "../component/Layout";
import Blog from "../component/subcomponents/Blog";
import PageTitle from "../component/subcomponents/PageTitle";


export default function Jobs() {
    return (
        <>
            <Layout>
                <PageTitle/>
                <Blog/>
            </Layout>
        </>
    )
}