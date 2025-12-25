import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Root/Navbar';
import Footer from '../Components/Root/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;