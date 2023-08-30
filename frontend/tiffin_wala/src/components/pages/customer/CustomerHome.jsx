import React, { useState, useEffect } from 'react';
import swal from "sweetalert" ;
import UserWelcome from "../common/UserWelcome" ;
import CustomerTiffinList from "./CustomerTiffinList.jsx" ;
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CustomerService from "../../../service/CustomerService" ;




const CustomerHome = ()=>{
            const [customer, setCustomer] = useState({
            firstName: "",
            email: "",
            lastName: "",
            id: "",
            jwt: ""
        });
    
        const [loggedIn, setLoggedIn] = useState(false);
    
        const navigate = useNavigate();
    
        useEffect(() => {
            let cust = JSON.parse(sessionStorage.getItem("customer"));
            if (cust == null) {
                swal("Not Authorized", "", "error");
            }
            else {
                // axios.get(`${IP_ADDRS}/customers/${cust.id}`)
                CustomerService.getCustomer(cust.id,cust.jwt)    
                    .then((res) => {
                        console.log(res.data);
                        setLoggedIn(true);
                        setCustomer({
                            firstName: res.data.firstName, lastName: res.data.lastName,
                            id: cust.id,
                            email: res.data.email,
                            jwt: cust.jwt
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                        swal("Something went Wrong", "", "error");
                    });
            }
        }, [])
    
    
        return (
            <>
                {loggedIn ?
                    (<>
                        <div className="jumbotron" style={{ marginLeft: 20 }}>
                            {/* <img src={`${IP_ADDRS}/customers/${customer.id}/profileImage`} style={{ float: "right", marginRight: 18 }} height={165} width={165} /> */}
                            <h3 style={{ marginTop: 10 }}>Hello ,
                            </h3>
                            <h1 style={{ marginLeft: 30 }}>
                                {customer.firstName}&nbsp;{customer.lastName}
                            </h1>
    
                            <h5 style={{ marginLeft: 30 }}>
                                {customer.email}
                            </h5>
                            <br />
                        </div>
                        <hr className="my-4" />
    
                        <div className="container" style={{ marginBottom: "50px", textAlign: "center" }}>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <div className="card" onClick={() => navigate("customer/update")}>
                                        <div className="card-body" >
                                            <h5 className="card-title">Update Profile</h5>
                                            <p className="card-text">Update your account details.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card" onClick={() => navigate("customer/customerTiffinList")}>
                                        <div className="card-body">
                                            <h5 className="card-title">View Orders</h5>
                                            <p className="card-text">Display Your All Orders </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </>)
    
                    : <div style={{ textAlign: "center" }}><h1>Please Log in to Access this page</h1></div>}
            </>
        )
    
    }
    
export default CustomerHome ;
