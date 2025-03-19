import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  ListItemText,
  CircularProgress
} from "@mui/material";

const skillsList = ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"];

const EditProfile = () => {

  const { user } = useSelector((state) => state.userReducer); // Get user from Redux store
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    firstName: Yup.string().min(4, "At least 4 characters").max(50).required("Required"),
    lastName: Yup.string().max(50, "Maximum 50 characters"),
    emailId: Yup.string().email("Invalid email").required("Required"),
    age: Yup.number().min(18, "You must be at least 18").required("Required"),
    gender: Yup.string().oneOf(["male", "female", "other"], "Invalid gender").required("Required"),
    photoUrl: Yup.string().url("Invalid URL"),
    about: Yup.string(),
    skills: Yup.array().min(1, "Select at least one skill"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      age: "",
      gender: "",
      photoUrl: "",
      about: "",
      skills: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Profile Updated Successfully!");
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        emailId: user.emailId || "",
        about: user.about || "about...",
        skills: user.skills || [],
        gender: user.gender || "",
        age: user.age || null,
      });
      setLoading(false);
    }
  }, [user]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Profile
      </Typography>
      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "auto" }} />
      ) : (
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
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
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
                label="Email"
                name="emailId"
                fullWidth
                variant="outlined"
                value={formik.values.emailId}
                disabled // ✅ Email is read-only
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              type="number"
              fullWidth
              variant="outlined"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth error={formik.touched.gender && Boolean(formik.errors.gender)}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Profile Picture URL"
              name="photoUrl"
              fullWidth
              variant="outlined"
              value={formik.values.photoUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.photoUrl && Boolean(formik.errors.photoUrl)}
              helperText={formik.touched.photoUrl && formik.errors.photoUrl}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="About"
              name="about"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={formik.values.about}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth error={formik.touched.skills && Boolean(formik.errors.skills)}>
              <InputLabel>Skills</InputLabel>
              <Select
                multiple
                name="skills"
                value={formik.values.skills}
                onChange={formik.handleChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {skillsList.map((skill) => (
                  <MenuItem key={skill} value={skill}>
                    <Checkbox checked={formik.values.skills.includes(skill)} />
                    <ListItemText primary={skill} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{formik.touched.skills && formik.errors.skills}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    )}
    </Container>
  );
};

export default EditProfile;
