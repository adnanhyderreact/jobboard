import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Blogs from "./pages/Blogs";
import SignInPage from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/jobs' element={<Jobs/>}/>
                    <Route path='/blog' element={<Blogs/>}/>
                    <Route path='/signin' element={<SignInPage/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
