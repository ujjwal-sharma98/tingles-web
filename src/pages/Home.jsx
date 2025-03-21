import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useDispatch } from 'react-redux';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchProfile } from '../redux/reducers/profileSlice';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

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