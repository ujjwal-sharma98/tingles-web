import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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
    CircularProgress,
    Box,
    Avatar,
    IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { updateProfile } from "../redux/reducers/profileSlice";
import { BASE_URL } from "../utils/constants";
import { fetchProfile } from '../redux/reducers/profileSlice';

const skillsList = ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"];

const EditProfile = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profileReducer); // Get user from Redux store
    const [loading, setLoading] = useState(true);

    const handleFileChange = async (event) => {
        if (!event.target.files[0]) {
            alert("Please select an image to upload!");
            return;
        }
        const formData = new FormData();
        formData.append("image", event.target.files[0]);

        try {
            await axios.post(`${BASE_URL}/profile/image/upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            dispatch(fetchProfile());
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(4, "At least 4 characters").max(50).required("Required"),
        lastName: Yup.string().max(50, "Maximum 50 characters"),
        emailId: Yup.string().email("Invalid email").required("Required"),
        age: Yup.number().min(18, "You must be at least 18").required("Required"),
        gender: Yup.string().oneOf(["male", "female", "other"], "Invalid gender").required("Required"),
        photoUrl: Yup.string().url("Invalid URL"),
        about: Yup.string(),
        // skills: Yup.array().min(1, "Select at least one skill"),
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
            alert("Profile Updated Successfully!");
            dispatch(updateProfile(values))
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
                photoUrl: user.photoUrl || "",
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
                <>
                    <Box display="flex" flexDirection="column" alignItems="center" mt={5} style={{ marginBottom: '20px' }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: 200,
                                height: 200,
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "2px solid #ddd",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={formik.values.photoUrl || "https://via.placeholder.com/200"}
                                alt="Uploaded"
                                sx={{ width: "100%", height: "100%" }}
                            />
                            <IconButton
                                component="label"
                                sx={{
                                    position: "absolute",
                                    top: 140,
                                    left: 140,
                                    bgcolor: "white",
                                    boxShadow: 1,
                                    "&:hover": { bgcolor: "white" },
                                }}
                            >
                                <EditIcon color="primary" />
                                <input type="file" hidden onChange={handleFileChange} />
                            </IconButton>
                            {!formik.values.photoUrl && (
                                <UploadFileIcon
                                    sx={{
                                        position: "absolute",
                                        fontSize: 50,
                                        color: "#aaa",
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                    <form onSubmit={formik.handleSubmit} style={{ marginBottom: '20px' }}>
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
                                    label="About"
                                    name="about"
                                    multiline
                                    rows={2}
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
                </>
            )}
        </Container>
    );
};

export default EditProfile;
