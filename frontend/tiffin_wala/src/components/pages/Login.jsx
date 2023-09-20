import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from "react-simple-captcha";
import swal from "sweetalert";
import "../../App.css"
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

    // change type of password box according to change in checkbox
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

        // Validate data
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
                        // Unauthorized - Invalid credentials
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
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center' style={{ marginTop: "1.5rem" }}><b>Login</b></h2>
                        <hr className="lead"></hr>

                        <form style={{ textAlign: "center" }}>
                            <div className="form-group">
                                <label> Email Id </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email ID"
                                    name="email"
                                    className={`form-control ${isDataValid.email ? "" : "is-invalid"}`}
                                    value={data.email}
                                    onChange={changeHandler}
                                    style={{ width: 300, margin: "auto" }}
                                />
                                {!isDataValid.email && <div className="invalid-feedback">Invalid Email Id</div>}
                            </div>
                            <div className="form-group">
                                <label> Password </label>
                                <input
                                    type={passType}
                                    placeholder="Password"
                                    name="password"
                                    className={`form-control ${isDataValid.password ? "" : "is-invalid"}`}
                                    value={data.password}
                                    onChange={changeHandler}
                                    style={{ width: 300, margin: "auto" }}
                                />
                                {!isDataValid.password && <div className="invalid-feedback">Invalid Password</div>}
                                <span><input type="checkbox" checked={isChecked} onChange={handleShowPassword} id="show" />&emsp;</span><label htmlFor="show">Show Password</label>
                            </div>

                            <div className="form-group" style={{ marginTop: "20px", textAlign: "center" }}>
                                <LoadCanvasTemplate />
                            </div>
                            <div className="form-group" style={{ textAlign: "center" }}>
                                <label> Enter Captcha: </label>
                                <input
                                    type="text"
                                    placeholder="Enter Captcha"
                                    id="user_captcha_input"
                                    name="user_captcha_input"
                                    className="form-control"
                                    style={{ width: 200, margin: "auto" }}
                                />
                            </div>

                            <div>
                                <table style={{ margin: "auto" }}>
                                    <thead />
                                    <tbody>
                                        <tr>
                                            <td><button className="btn btn-success" onClick={submitData}>Login</button></td>
                                            <td><button className="btn btn-danger" onClick={() => navigate("/")}>Cancel</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                        <div style={{ textAlign: "center" }}>
                            <a href="/forgotpassword">Forgot password? Click here...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
