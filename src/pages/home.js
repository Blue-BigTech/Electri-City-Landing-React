import React, { useState, useEffect } from "react";
import LogoBar from "../components/LogoBar";
export const Home = () => {
    useEffect(() => {
        document.title = "ElectriCity";
    }, []);
    return (
        <div>
            <LogoBar />
        </div>
    );
};