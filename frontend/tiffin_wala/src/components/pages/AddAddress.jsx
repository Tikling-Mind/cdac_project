import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { IP_ADDRS } from "../../service/BaseAddress";
import { validatePincode } from "../validations/Validation";

const AddAddress = () => {
  const [userRole, setUserRole] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();

  const [address, setAddress] = useState({
    id: "",
    role: "",
    line1: "",
    line2: "",
    city: "",
    pincode: "",
    state: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    line1: "",
    line2: "",
    city: "",
    pincode: "",
    state: "",
  });

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("signUpData"));
    console.log(data);
    if (data !== null) {
      setFirstName(data.firstName);
      setId(data.id);
      if (data.userRole === "ROLE_VENDOR") {
        setAddress({ ...address, id: data.id, role: "ROLE_VENDOR" });
        console.log(address);
        setUserRole("vendors");
      } else {
        setAddress({ ...address, id: data.id, role: "ROLE_CUSTOMER" });
        setUserRole("customers");
      }
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidation = () => {
    const errors = {
      line1: "",
      line2: "",
      city: "",
      pincode: "",
      state: "",
    };

    if (address.line1.trim() === "") {
      errors.line1 = "Line1 is required";
    }

    if (address.line2.trim() === "") {
      errors.line2 = "Line2 is required";
    }

    if (address.city.trim() === "") {
      errors.city = "City is required";
    }

    if (!validatePincode(address.pincode)) {
      errors.pincode = "Invalid pincode";
    }

    if (address.state.trim() === "") {
      errors.state = "State is required";
    }

    setValidationErrors(errors);

    // Check if there are any validation errors
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      axios
        .post(`${IP_ADDRS}/auth/address`, address)
        .then((response) => {
          setAddress({ Line1: "", Line2: "", city: "", pincode: "", state: "" });
          swal("Registration complete", "", "success");
          sessionStorage.removeItem("signUpData");
          navigate("/sign-in");
        })
        .catch((error) => {
          console.log(error);
          swal(`Something Went Wrong`, "", "error");
        });
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: "24px", borderRadius: "12px", marginTop: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Hi {firstName},
        </Typography>
        <Typography variant="h5" gutterBottom>
          Add Address
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Line1"
            variant="outlined"
            margin="normal"
            name="line1"
            value={address.line1}
            onChange={handleChange}
            error={validationErrors.line1 !== ""}
            helperText={validationErrors.line1}
            required
          />
          <TextField
            fullWidth
            label="Line2"
            variant="outlined"
            margin="normal"
            name="line2"
            value={address.line2}
            onChange={handleChange}
            error={validationErrors.line2 !== ""}
            helperText={validationErrors.line2}
            required
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            margin="normal"
            name="city"
            value={address.city}
            onChange={handleChange}
            error={validationErrors.city !== ""}
            helperText={validationErrors.city}
            required
          />
          <TextField
            fullWidth
            label="Pincode"
            variant="outlined"
            margin="normal"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            error={validationErrors.pincode !== ""}
            helperText={validationErrors.pincode}
            required
          />
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            margin="normal"
            name="state"
            value={address.state}
            onChange={handleChange}
            error={validationErrors.state !== ""}
            helperText={validationErrors.state}
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: "16px" }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddAddress;
