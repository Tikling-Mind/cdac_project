import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from "react-simple-captcha";
import swal from "sweetalert";
import "../../App.css"
import { IP_ADDRS } from "../../service/BaseAddress"

function Login(props) {

    // State to store Login data
    const [data, setData] = useState({
        email: "",
        password: "",
        loginerror: ""
    });

    // State to change password visibility
    const [passType, setPassType] = useState("text");
    const [isChecked, setIsChecked] = useState(false);

    // Captcha related
    useEffect(() => {
        loadCaptchaEnginge(6, 'red', 'black', 'upper');
    }, [])

    // Change the status when checkbox is checked/unchecked
    const handleShowPassword = () => {
        setIsChecked(!isChecked);
    }
    // change type of password box according to change in checkbox
    useEffect(() => {
        if (isChecked == true) {
            setPassType("text");
            return;
        }
        setPassType("password");
    }, [isChecked])

    // Change  data with change in value 
    const changeHandler = (e) => {
        setData((data) => ({
            ...data, // properties that are not changed            
            [e.target.name]: e.target.value // update value of change properties
        }));
    }

    const navigate = useNavigate();

    const submitData = (e) => {
        if (data.username == '') {
            alert('Username cannot be null');
            return;
        }
        if (data.password == '') {
            alert('Password cannot be null');
            return;
        }
        // Prevent reload/refresh
        e.preventDefault();

        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) { 
            // Store the Input value
            const obj = { "email": data.email, "password": data.password } ;
            
            // Send request for authenticating user
            axios.post(`${IP_ADDRS}/auth/signin`, obj)
                .then(response => {
                    props.isLogged(true);
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
                }).catch(err => {
                    swal("Wrong Detials You were Entered", "Enter Correct Details again, Make Sure you are registered before Login", "error");
                })
        }

        else {
            swal("Captcha Does Not Match !", "Enter Correct Captcha", "error");
        }

    }




    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center'style={{marginTop:"1.5rem"}}><b>Login</b></h2>
                        <hr className="lead"></hr>

                        <form style={{ textAlign: "center" }}>
                            <div className="form-group">
                                <label> Email Id </label>
                                <input type="email" placeholder="Enter Email ID" name="email" className="form-control"
                                    value={data.email} onChange={changeHandler} style={{ width: 300, margin: "auto" }} />

                            </div>
                            <div className="form-group">
                                <label> Password </label>
                                <input type={passType} placeholder="Password" name="password" className="form-control"
                                    value={data.password} onChange={changeHandler} style={{ width: 300, margin: "auto" }} />
                                <span><input type="checkbox" checked={isChecked} onChange={handleShowPassword} id="show" ></input>&emsp;</span><label htmlFor="show">Show Password</label>

                            </div >

                            <div className="form-group" style={{ "marginTop": "20px", textAlign: "center" }}>
                                <LoadCanvasTemplate />
                            </div >
                            <div className="form-group" style={{ textAlign: "center" }}>
                                <label> Enter Captcha: </label>
                                <input type="text" placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" className="form-control" style={{ width: 200, margin: "auto" }}
                                />
                            </div >


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
                            <a href="/forgotpassword">Forgot password? click here...</a>
                            <p className="text-danger">{data.loginerror}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;