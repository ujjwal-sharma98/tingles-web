import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const SignupPage = () => {
//   const [signUpFormData, setSignUpFormData] = useState({});
  const [signup, setSignUp] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height to center the form
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 4,
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "background.paper",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h4" align="center" fontWeight="bold">
                {signup ? 'Sign Up' : 'Login'}
              </Typography>
            </Grid>
            {signup && <Grid item>
              <TextField label="Name" fullWidth variant="outlined" />
            </Grid>}
            <Grid item>
              <TextField label="Email" type="email" fullWidth variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Password" type="password" fullWidth variant="outlined" />
            </Grid>
            {signup && <Grid item>
              <TextField label="Confirm Password" type="password" fullWidth variant="outlined" />
            </Grid>}
            <Grid item>
            {signup ? <div>Alredy have an account? <Button cursor='pointer' onClick={() => setSignUp(false)}> Login </Button></div> : <div>New User ? <Button cursor='pointer' onClick={() => setSignUp(true)}> SignUp </Button></div>}
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1, fontSize: "16px" }}
              >
                {signup ? 'Sign Up' : 'Login'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
