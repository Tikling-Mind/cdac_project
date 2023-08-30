import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress";

function UpdateAddress() {

    const navigate = useNavigate();
    const [userRole, setUserRole] = useState();
    const [data, setData] = useState({
        id: "",
        jwt: "",
        line1: "",
        line2: "",
        city: "",
        pincode: "",
        state: ""
    });

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
            axios.get(`${IP_ADDRS}/vendors/${ven.id}/addresses`, { headers: { "Authorization": `Bearer ${ven.jwt}` } })
                .then((res) => {
                    console.log(res.data);
                    setData({
                        line1: res.data.line1,
                        line2: res.data.line2,
                        city: res.data.city,
                        pincode: res.data.pincode,
                        state: res.data.state,
                        id: ven.id,
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
                axios.get(`${IP_ADDRS}/customers/${cust.id}/addresses`, { headers: { "Authorization": `Bearer ${cust.jwt}` } })
                    .then((res) => {
                        console.log(res.data);
                        setData({
                            line1: res.data.line1,
                            line2: res.data.line2,
                            city: res.data.city,
                            pincode: res.data.pincode,
                            state: res.data.state,
                            id: cust.id,
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
            axios.put(`${IP_ADDRS}/vendors/${data.id}/editaddress`, data, { headers: { "Authorization": `Bearer ${data.jwt}` } })
                .then(res => {
                    swal(`${res.data}`, "", "success");
                    navigate("/vendor");
                })
                .catch(err => {
                    swal(`${err.data}`, "", "error");
                })
        }
        else if (userRole == "cust") {
            axios.put(`${IP_ADDRS}/customers/${data.id}/editaddresses`, data, { headers: { "Authorization": `Bearer ${data.jwt}` } })
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
                    <h2 className='text-center'>Update Address </h2>

                    <form>

                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b> Line 1 : </b></label>
                            <input type="text" placeholder={data.line1} name="line1" className="form-control"
                                value={data.line1} onChange={changeHandler} />
                        </div>
                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b> Line 2 : </b></label>
                            <input type="text" placeholder={data.line2} name="line2" className="form-control"
                                value={data.line2} onChange={changeHandler} />

                        </div >
                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  City : </b></label>
                            <input type="text" placeholder={data.city} name="city" className="form-control"
                                value={data.city} onChange={changeHandler} />
                        </div>


                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  Pincode: </b></label>
                            <input type="text" placeholder={data.pincode} name="pincode" className="form-control"
                                value={data.pincode} onChange={changeHandler} />
                        </div>
                        <div style={{ marginTop: '10px' }} className="form-group">
                            <label><b>  State: </b></label>
                            <input type="text" placeholder={data.state} name="state" className="form-control"
                                value={data.state} onChange={changeHandler} />
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
export default UpdateAddress;

