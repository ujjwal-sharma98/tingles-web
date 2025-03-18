import React from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';

const SignupPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Typography variant="h4" align="center">Sign Up</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Name" fullWidth />
                    </Grid>
                    <Grid item>
                        <TextField label="Email" type="email" fullWidth />
                    </Grid>
                    <Grid item>
                        <TextField label="Password" type="password" fullWidth />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignupPage;