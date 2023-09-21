import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Box, Paper, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { IP_ADDRS } from "../../service/BaseAddress";
import { validateEmail, validatePassword, validateMobile, validateUserRole, validateName } from "../validations/Validation";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const navigate = useNavigate();

  const [obj, setObj] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    userRole: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    setObj({
      ...obj,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const options = ["ROLE_CUSTOMER", "ROLE_VENDOR"];

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateName(obj.firstName) ||
      !validateName(obj.lastName) ||
      !validateEmail(obj.email) ||
      !validatePassword(obj.password) ||
      obj.password !== obj.confirmPassword || // Check if passwords match
      !validateMobile(obj.mobile) ||
      !validateUserRole(obj.userRole)
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      axios
        .post(`${IP_ADDRS}/auth/signup`, obj)
        .then((response) => {
          sessionStorage.setItem("signUpData", JSON.stringify({ userRole: obj.userRole, firstName: obj.firstName, id: response.data.id }));
          setObj({ email: "", password: "", firstName: "", lastName: "", confirmPassword: "", mobile: "", userRole: "---select one role---" });
          navigate(`/addAddress`);
        })
        .catch((error) => {
          setSubmitted(false);
          console.log(error);
          swal("Something went Wrong", "", "error");
        });
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper elevation={3} sx={{ width: "400px", p: 3, borderRadius: "12px" }}>
          <Typography variant="h5" gutterBottom>
            User Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            {error && (
              <Typography variant="subtitle2" color="error" gutterBottom>
                Please enter all the fields correctly
              </Typography>
            )}
            {submitted && (
              <Typography variant="subtitle2" color="success" gutterBottom>
                Registration Successful
              </Typography>
            )}
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              margin="normal"
              name="firstName"
              value={obj.firstName}
              onChange={handleChange}
              error={!validateName(obj.firstName)}
              helperText={!validateName(obj.firstName) ? "Invalid first name" : ""}
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              margin="normal"
              name="lastName"
              value={obj.lastName}
              onChange={handleChange}
              error={!validateName(obj.lastName)}
              helperText={!validateName(obj.lastName) ? "Invalid last name" : ""}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={obj.email}
              onChange={handleChange}
              error={!validateEmail(obj.email)}
              helperText={!validateEmail(obj.email) ? "Invalid email" : ""}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                name="password"
                type={showPassword ? "text" : "password"}
                value={obj.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={!validatePassword(obj.password)}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={obj.confirmPassword}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={obj.password !== obj.confirmPassword}
                helperText={obj.password !== obj.confirmPassword ? "Passwords do not match" : ""}
              />
            </FormControl>
            <TextField
              fullWidth
              label="Mobile"
              variant="outlined"
              margin="normal"
              name="mobile"
              value={obj.mobile}
              onChange={handleChange}
              error={!validateMobile(obj.mobile)}
              helperText={!validateMobile(obj.mobile) ? "Invalid mobile number" : ""}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>User Role</InputLabel>
              <Select
                name="userRole"
                value={obj.userRole}
                onChange={handleChange}
                label="User Role"
                error={!validateUserRole(obj.userRole)}
              >
                <MenuItem value="">---select one role---</MenuItem>
                {options.map((option, index) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default SignUp;
