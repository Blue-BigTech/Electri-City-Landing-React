import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import  Home  from "../pages/home";
export const Links = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/unicred"></Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};