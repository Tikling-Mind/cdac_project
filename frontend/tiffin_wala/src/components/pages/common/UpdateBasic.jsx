import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress";

function UpdateBasic() {

    const navigate = useNavigate();
    const [userRole, setUserRole] = useState();
    const [data, setData] = useState({
        firstName: "",
        email: "",
        lastName: "",
        mobile: "",
        id: "",
        jwt: "",
    });

    const [Error, setError] = useState({
        first_name_error: "",
        last_name_error: "",
        mobile_number_error: "",
    });

    const [flag, setFlag] = useState({
        firstName: true,
        lastName: true,
        mobileNumber: true,
    });

    const validateFirstName = (e) => {
        let name = e.target.value;
        if (name === "") {
            setError({ ...Error, first_name_error: "Please enter First Name" });
            setFlag({ ...flag, firstName: false });

        }
        else {
            setError({ ...Error, first_name_error: "" });
            setFlag({ ...flag, firstName: true });

        }
    }
    const validateLastName = (e) => {
        let name = e.target.value;
        if (name === "") {
            setError({ ...Error, last_name_error: "Please enter Last Name" });
            setFlag({ ...flag, lastName: false });
            console.log(flag.lastName);

        }
        else {
            setError({ ...Error, last_name_error: "" });
            setFlag({ ...flag, lastName: true });
            console.log(flag.lastName);

        }
    }
    const validateMobileNumber = (e) => {
        let mobileNumber = e.target.value;
        let mnRegex = new RegExp(/^[0-9]{10}$/);
        if (mnRegex.test(mobileNumber) === true) {
            setError({ ...Error, mobile_number_error: "" });
            setFlag({ ...flag, mobileNumber: true });

        }
        else {
            setError({ ...Error, mobile_number_error: "Mobile Number should be 10 digits without +91 or 0" });
            setFlag({ ...flag, mobileNumber: false });

        }
    }

    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const refreshPage = (e) => {
        window.location.reload();
    };

    useEffect(() => {
        let ven = JSON.parse(sessionStorage.getItem("vendor"));
        if (ven != null) {
            setUserRole("ven")
            axios.get(`${IP_ADDRS}/vendors/${ven.id}`, { headers: { "Authorization": `Bearer ${ven.jwt}` } })
                .then((res) => {
                    console.log(res.data);
                    setData({
                        firstName: res.data.firstName, lastName: res.data.lastName,
                        id: ven.id, mobile: res.data.mobile,
                        email: res.data.email,
                        jwt: ven.jwt
                    })
                })
                .catch((err) => {
                    console.log(err);
                    swal("Something went Wrong", `${err}`, "error");
                });
        }
        else {
            let cust = JSON.parse(sessionStorage.getItem("customer"));
            if (cust != null) {
                setUserRole("cust")
                axios.get(`${IP_ADDRS}/customers/${cust.id}`, { headers: { "Authorization": `Bearer ${cust.jwt}` } })
                    .then((res) => {
                        console.log(res.data);
                        setData({
                            firstName: res.data.firstName, lastName: res.data.lastName,
                            id: cust.id, mobile: res.data.mobile,
                            email: res.data.email,
                            jwt: cust.jwt
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                        swal("Something went Wrong", `${err}`, "error");
                    });
            }
            else {
                swal("Relogin to Access this Page", "", "error");
                sessionStorage.clear()
                navigate("/sign-in")
            }
        }

    }, []);


    const submitData = (e) => {
        e.preventDefault();
        if (userRole == "ven") {
            axios.put(`${IP_ADDRS}/vendors`, data, { headers: { "Authorization": `Bearer ${data.jwt}` } })
                .then(res => {
                    swal(`${res.data}`, "", "success");
                    navigate("/vendor");
                })
                .catch(err => {
                    swal(`${err.data}`, "", "error");
                })
        }
        else if (userRole == "cust") {
            axios.put(`${IP_ADDRS}/customers`, data, { headers: { "Authorization": `Bearer ${data.jwt}` } })
                .then(res => {
                    swal(`${res.data}`, "", "success");
                    navigate("/customer");
                })
                .catch(err => {
                    swal(`${err.data}`, "", "error");
                })
        }
    }

    return (
        <div className="container fluid">

            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className='text-center'>Update Information </h2>

                    <form>

                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  First Name: </b></label>
                            <input type="text" placeholder={data.firstName} name="firstName" className="form-control"
                                value={data.firstName} onChange={changeHandler} onBlur={validateFirstName} />
                            <span className="text text-danger">{Error.first_name_error}</span>
                        </div>
                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  Last Name: </b></label>
                            <input type="text" placeholder={data.lastName} name="lastName" className="form-control"
                                value={data.lastName} onChange={changeHandler} onBlur={validateLastName} />
                            <span className="text text-danger">{Error.last_name_error}</span>
                        </div >
                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  Email: </b></label>
                            <input type="text" readOnly placeholder={data.email} name="email" className="form-control"
                                value={data.email} onChange={changeHandler} />
                            {/* <span className="text text-danger">{Error.mobile_number_error}</span> */}
                        </div>


                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  Mobile Number: </b></label>
                            <input type="text" placeholder={data.mobile} name="mobile" className="form-control"
                                value={data.mobile} onChange={changeHandler} onBlur={validateMobileNumber} />
                            <span className="text text-danger">{Error.mobile_number_error}</span>
                        </div>
                        <div>
                            <table style={{ margin: "auto" }}>
                                <thead />
                                <tbody>
                                    <tr>
                                        <td> <button className="btn btn-success" onClick={submitData}>Update</button></td>
                                        <td> <button type="button" className="btn btn-danger" onClick={refreshPage}>Reset</button></td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            if (userRole === "ven") navigate("/vendor")
                                            else navigate("/customer")
                                        }}>Cancel</button></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </form>

                </div>
            </div>
        </div>








    );

}
export default UpdateBasic;

