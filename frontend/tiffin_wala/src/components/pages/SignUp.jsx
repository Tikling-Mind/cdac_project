import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../service/BaseAddress";
import { BorderAll } from "react-bootstrap-icons";

import { validateEmail,validatePassword,validateMobile, validateUserRole, validateName } from "../validations/Validation";
function SignUp() {
  const navigate = useNavigate();
  // Object to store User Data
  const [obj, setObj] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    mobile: "",
    userRole: "",
    // address : {
    //   line1 : "",
    //   line2 : "",
    //   city : "",
    //   pincode : "",
    //   state : "",
    // }
  });

  // // State for validitiy of email
  // const [validEmailFlag, setValidEmailFlag] = useState(false);

  // // state for otp
  // const [otp, setOtp] = useState({
  //   sendOTPflag: false,
  //   num: "",
  // });

  // Update Value after change
  const handleChange = (event) => {
    setObj({
      ...obj,
      [event.target.name]: event.target.value, // [] -> dynamically renders the name
    });
    // console.log(event.target.value)
  };

  // User Type
  const options = ["ROLE_CUSTOMER", "ROLE_VENDOR"];

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload/refresh
    // if (!validEmailFlag) { // Throw error if email has not been validated
    //   swal("Validate Email Id First", "", "error");
    //   return;
    // }
    // Check validation rules
    if (!validateName(obj.firstName)|| !validateName(obj.lastName) || !validateEmail(obj.email) || !validatePassword(obj.password) || !validateMobile(obj.mobile)  || !validateUserRole(obj.userRole)) {
      console.log("Invalid") ;
      setError(true);
    } else {  // If fields are not empty
      setSubmitted(true);
      setError(false);
      // Request for account creation
      axios
        .post(`http://localhost:8080/auth/signup`, obj)
        .then((response) => { // Store data in sessionStorage
          sessionStorage.setItem("signUpData", JSON.stringify({ userRole: obj.userRole, firstName: obj.firstName, id: response.data.id }))
          setObj({ email: "", password: "", firstName: "", lastName: "", mobile: "", userRole: "---select one role---" });
          navigate(`/AddAddress`);
        })
        .catch((error) => {
          setSubmitted(false) ;
          console.log(error);
          swal("Something went Wrong", "", "error");
        });
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        {/* <h1>User {obj.firstName} {obj.lastName} successfully registered!!</h1> */}
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  // const sendOTP = () => {
  //   if (obj.email === "") {
  //     swal("Please Enter Email", "", "error");
  //     return;
  //   }
  //   let emailObj = { email: obj.email };
  //   axios
  //     .post(`${IP_ADDRS}/auth/validateEmail`, emailObj)
  //     .then((res) => {
  //       swal(res.data, "", "success");
  //       setOtp({ ...otp, sendOTPflag: true });
  //     })
  //     .catch((err) =>
  //       swal({
  //         title: "Email Id Already Registered",
  //         icon: "warning",
  //         buttons: true,
  //         dangerMode: true,
  //       })
  //     );
  // };

  // const verifyOTP = () => {
  //   if (obj.email === "") {
  //     swal("Please Enter Email", "", "error");
  //     return;
  //   }
  //   if (otp.num === "") {
  //     swal("Please Enter OTP", "", "error");
  //     return;
  //   }
  //   let otpObj = { email: obj.email, otp: otp.num };
  //   axios
  //     .post(`${IP_ADDRS}/auth/verifyOtp`, otpObj)
  //     .then((res) => {
  //       swal(res.data, "", "success");
  //       setValidEmailFlag(true);
  //     })
  //     .catch((err) => swal(`${err}`, "", "error"));
  // };

  return (
    <div className="card col-md-6 offset-md-3 offset-md-3">
      <div>
        <h2 className="text-center" style={{marginTop:"1rem"}}>
          <b>User Registration</b>
        </h2>
        <hr className="lead"></hr>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}

        <form style={{ textAlign: "center" }}>
          {/* Labels and inputs for form data */}
          <label className="label">Firstname</label>
          <input onChange={handleChange} style={{ width: 300, margin: "auto" }} name="firstName" value={obj.firstName} type="text" />
          <br /> 
          <label className="label">Lastname</label>
          <input onChange={handleChange} style={{ width: 300, margin: "auto" }} name="lastName" value={obj.lastName} type="text" />
          <br />
          <label className="label">Email</label> <br />
          <input onChange={handleChange} style={{ width: 300, margin: "auto" }} name="email" value={obj.email} type="email" />
          <br />
          {/* {validEmailFlag ? (
            // <span>Email Validated</span>
          ) : otp.sendOTPflag ? (
            <div>
              <span>
                <input
                  onChange={(e) => {
                    setOtp({ ...otp, num: e.target.value });
                  }}
                  style={{ width: 300, margin: "auto" }}
                  name="otp"
                  value={otp.num}
                  type="email"
                />
              </span>
              <span>
                <p>Enter Otp</p>
                <button type="button" onClick={verifyOTP} className="btn btn-primary">
                  Verify OTP
                </button>
              </span>
            </div>
          ) : (
            <div> <br />
              <span>Click on Send OTP to Validate email</span> <br />
              <span>
                <button type="button" onClick={sendOTP} className="btn btn-primary">
                  Send OTP
                </button> <br /> <br />

              </span>
            </div>
          )} */}

          <label className="label">Password</label>
          <input onChange={handleChange} style={{ width: 300, margin: "auto" }} name="password" value={obj.password} type="password" />
          <br />
          <label className="label">Mobile</label>  <br />
          <input onChange={handleChange} style={{ width: 300, margin: "auto" }} name="mobile" value={obj.mobile} type="text" min={1000000000} minLength={10} maxLength={10} />
            <br />
          <label className="label">I am&nbsp;&nbsp;&nbsp; </label>
          <select style={{ width: 170, margin: "auto" }} onChange={handleChange} name="userRole">
            <option>---select one role---</option>
            {options.map((option, index) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
          <br />
          <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
