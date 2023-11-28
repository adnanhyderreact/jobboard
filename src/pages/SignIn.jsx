import Layout from "../component/Layout";

import PageTitle from "../component/subcomponents/PageTitle";
import SignIn from "../component/subcomponents/SignIn";

export default function SignInPage() {
    return (
        <>
            <Layout>
                <PageTitle title='Sign In'/>
                <SignIn/>
            </Layout>
        </>
    )
}