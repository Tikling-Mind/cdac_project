import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from "react-simple-captcha";
import swal from "sweetalert";
import { Container, Typography, TextField, Button, Checkbox, FormControlLabel, Box, Grid } from '@mui/material';
import { IP_ADDRS } from "../../service/BaseAddress"
import { validateEmail, validatePassword } from "../validations/Validation";

function Login(props) {
    const [data, setData] = useState({
        email: "",
        password: "",
        loginerror: ""
    });

    const [isDataValid, setIsDataValid] = useState({
        email: false,
        password: false
    });

    const [passType, setPassType] = useState("password");
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6, 'red', 'black', 'upper');
    }, [])

    useEffect(() => {
        if (isChecked == true) {
            setPassType("text");
            return;
        }
        setPassType("password");
    }, [isChecked])

    const handleShowPassword = () => {
        setPassType(isChecked ? "text" : "password");
        setIsChecked(!isChecked);
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === 'email') {
            setIsDataValid({ ...isDataValid, email: validateEmail(value) });
        } else if (name === 'password') {
            setIsDataValid({ ...isDataValid, password: validatePassword(value) });
        }
    }

    const submitData = (e) => {
        e.preventDefault();

        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            axios.post(`${IP_ADDRS}/auth/signin`, { email: data.email, password: data.password })
                .then(response => {
                    if (response.data.role.includes("ROLE_CUSTOMER")) {
                        sessionStorage.setItem("customer", JSON.stringify(response.data));
                        navigate(`/customer`);
                    }
                    else if (response.data.role.includes("ROLE_VENDOR")) {
                        sessionStorage.setItem("vendor", JSON.stringify(response.data));
                        navigate(`/vendor`);
                    }
                    else if (response.data.role.includes("ROLE_ADMIN")) {
                        sessionStorage.setItem("admin", JSON.stringify(response.data));
                        navigate(`/admin`);
                    }
                })
                .catch(err => {
                    if (err.response && err.response.status === 401) {
                        swal("Wrong Details", "Please enter valid credentials.", "error");
                    } else {
                        swal("Error", "An error occurred while processing your request.", "error");
                    }
                })
        } else {
            swal("Captcha Does Not Match!", "Please enter the correct captcha.", "error");
        }
    }

    return (
        <Container>
            <Box mt={5}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={submitData}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email Id"
                                name="email"
                                type="email"
                                placeholder="Enter Email ID"
                                value={data.email}
                                onChange={changeHandler}
                                error={!isDataValid.email}
                                helperText={!isDataValid.email ? "Invalid Email Id" : ""}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                name="password"
                                type={passType}
                                placeholder="Password"
                                value={data.password}
                                onChange={changeHandler}
                                error={!isDataValid.password}
                                helperText={!isDataValid.password ? "Invalid Password" : ""}
                                sx={{ mb: 2 }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={handleShowPassword}
                                        id="show"
                                    />
                                }
                                label="Show Password"
                                sx={{ mb: 2 }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <LoadCanvasTemplate />
                            </div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Enter Captcha"
                                id="user_captcha_input"
                                name="user_captcha_input"
                                placeholder="Enter Captcha"
                                sx={{ mb: 2 }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    type="submit"
                                    sx={{ mr: 2 }}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => navigate("/")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                        <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <a href="/forgotpassword">Forgot password? Click here...</a>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Login;
