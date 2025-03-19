import React from 'react';
import { makeStyles } from '@mui/styles'; // ✅ Corrected import for makeStyles
import { Typography, Link } from '@mui/material'; // ✅ Updated import path

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="inherit">
                &copy; {new Date().getFullYear()} Your Website Name
            </Typography>
            <Typography variant="body2" color="inherit">
                Made with love by <Link href="https://www.example.com">Your Name</Link>
            </Typography>
        </footer>
    );
};

export default Footer;