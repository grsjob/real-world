import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";


const PageWrapper = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default PageWrapper;
