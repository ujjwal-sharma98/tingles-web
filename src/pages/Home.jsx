import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchUser } from '../redux/reducers/userSlice';

const HomePage = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userReducer);

    console.log("User Data:", user);

    useEffect(() => {
        dispatch(fetchUser());
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