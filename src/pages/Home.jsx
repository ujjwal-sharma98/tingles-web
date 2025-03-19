import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Container sx={{ minHeight: "80vh", mt: 3 }}>
                <Outlet />
            </Container>
            <Footer/>
        </div>
    );
};

export default HomePage;