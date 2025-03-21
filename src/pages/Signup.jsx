import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  IconButton, 
  InputAdornment,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signUpUser } from "../redux/reducers/authSlice";

const SignupPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signup, setSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { isLoggedIn, error, loading } = useSelector((state) => state.authReducer);

  const validationSchema = Yup.object({
    firstName: signup
      ? Yup.string().min(3, "Must be at least 3 characters").required("Required")
      : Yup.string().notRequired(),
    emailId: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: signup
      ? Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm Password is required")
      : Yup.string().notRequired(),
    gender: signup ? Yup.string().required("Please select your gender") : Yup.string().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
        if (signup) {
            dispatch(signUpUser(values))
        } else {
            dispatch(loginUser({ emailId: values.emailId, password: values.password }));
        }
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h4" align="center" fontWeight="bold">
                {signup ? "Sign Up" : "Login"}
              </Typography>
            </Grid>

            {signup && (
                <>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        label="First Name"
                        name="firstName"
                        fullWidth
                        variant="outlined"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            fullWidth
                            variant="outlined"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </>
            )}

            <Grid item>
              <TextField
                label="Email"
                name="emailId"
                type="email"
                fullWidth
                variant="outlined"
                value={formik.values.emailId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                helperText={formik.touched.emailId && formik.errors.emailId}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                }}
              />
            </Grid>

            {signup && (
              <Grid item>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                }}
                />
              </Grid>
            )}

            {signup && (
              <Grid item>
                <FormControl component="fieldset" error={formik.touched.gender && Boolean(formik.errors.gender)}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  {formik.touched.gender && formik.errors.gender && (
                    <Typography variant="caption" color="error">
                      {formik.errors.gender}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            )}

            <Grid item>
              {signup ? (
                <div>
                  Already have an account?{" "}
                  <Button sx={{ textTransform: "none" }} onClick={() => setSignUp(false)}>
                    Login
                  </Button>
                </div>
              ) : (
                <div>
                  New User?{" "}
                  <Button sx={{ textTransform: "none" }} onClick={() => setSignUp(true)}>
                    Sign Up
                  </Button>
                </div>
              )}
            </Grid>
            {loading && <Typography variant="h6">Loading...</Typography>}
            {error && <Typography variant="h6" color="error">{error}</Typography>}
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1, fontSize: "16px" }}
              >
                {signup ? "Sign Up" : "Login"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
