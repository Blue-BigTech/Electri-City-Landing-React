import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "../pages/home";
import  Roadmap  from "../pages/roadmap";
import LogoBar from "../components/LogoBar";
import ScrollTop from "../components/ScrollTop";
import About from "../pages/about";
export const Links = () => {
    return (
        <BrowserRouter>
            <LogoBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/unicred" />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h3>No match</h3>} />
            </Routes>
            <ScrollTop />
        </BrowserRouter>
    );
};