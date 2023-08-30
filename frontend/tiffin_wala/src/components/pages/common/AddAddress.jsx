import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress";

const AddAddress = () => {

  let data;

  const [userRole, setUserRole] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();


  const [address, setAddress] = useState({
    id : "",
    role : "",
    line1: "",
    line2: "",
    city: "",
    pincode: "",
    state: "",
  });

  useEffect(() => {
    data = JSON.parse(sessionStorage.getItem("signUpData"));
    console.log(data) ;
    setFirstName(data.firstName)
    setId(data.id)
    if (data.userRole == "ROLE_VENDOR"){
      setAddress({...address, id:data.id, role : "ROLE_VENDOR"}) ;
      console.log(address) ;
      setUserRole("vendors")
    }      
    else{
      setAddress({...address, id:data.id,role : "ROLE_CUSTOMER"}) ;
      setUserRole("customers") ;
    }

  }, [])

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.line1 === "" || address.line2 === "" || address.city === "" || address.pincode === "" || address.state === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log(address);

      axios
        .post(`${IP_ADDRS}/auth/address`, address)
        .then((response) => {
          setAddress({ Line1: "", Line2: "", city: "", pincode: "", state: "" });
          swal(`${response.data}`, "", "success")
          sessionStorage.removeItem("signUpData")
          navigate("/sign-in");
        })
        .catch((error) => {
          console.log(error);
          swal(`Something Went Wrong`, "", "error")
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
        <h1>User successfully registered!!</h1>
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

  return (
    <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: 20 }}>
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <h5>Hi {firstName},</h5>
      </div>
      <div>
        <h2 className="text-center">
          <b>Add Address</b>
        </h2>
        <hr className="lead"></hr>
      </div>
      <center>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Line1</label>
          <input onChange={handleChange} name="line1" value={address.line1} type="text" />

          <label className="label">Line2</label>
          <input onChange={handleChange} name="line2" value={address.line2} type="text" />

          <label className="label">City</label>
          <input onChange={handleChange} name="city" value={address.city} type="text" />

          <label className="label">Pincode</label>
          <input onChange={handleChange} name="pincode" value={address.pincode} minLength={10} maxLength={10} type="number" />

          <label className="label">State</label>
          <input onChange={handleChange} name="state" value={address.state} type="text" />

          <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

export default AddAddress;
