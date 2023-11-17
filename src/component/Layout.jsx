import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
            <BackButton />
        </>
    )
}