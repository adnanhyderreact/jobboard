import PageTitle from "../component/subcomponents/PageTitle";
import Layout from "../component/Layout";
import {getLogIn} from "../helper/global";

export default function Dashboard() {
   const deserializedObject = getLogIn();
    return (
        <>
            <Layout>
                <PageTitle title='Dashboard'/>
                Welcome
                <table>
                    <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{deserializedObject.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{deserializedObject.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{deserializedObject.email}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{deserializedObject.gender}</td>
                    </tr>
                    <tr>
                        <td>ID:</td>
                        <td>{deserializedObject.id}</td>
                    </tr>

                    </tbody>
                </table>
            </Layout>
        </>
    )
}