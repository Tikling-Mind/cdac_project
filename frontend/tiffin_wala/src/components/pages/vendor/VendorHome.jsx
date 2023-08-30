import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import VendorService from "../../../service/VendorService" ;


function Vendor() {
    const [vendor, setVendor] = useState({
        id : "",
        firstName : "",
        lastName : "", 
        email : "",
        jwt : ""
    });

    const {id, jwt} = useParams() ;

    const [loggedIn, setLoggedIn] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {       
        let ven = JSON.parse(sessionStorage.getItem("vendor"));
        if (ven == null) {
            swal("Not Authorized", "", "error");
        }
        else {
            VendorService.getVendor(ven.id, ven.jwt)
            // axios.get("http://localhost:8080/customer/"+id)  
                .then ((res) => {
                    console.log(res.data) ;
                    setLoggedIn(true) ;
                    setVendor({
                        id : res.data.id,
                        firstName : res.data.firstName,
                        lastName : res.data.lastName,
                        email : res.data.email,
                        jwt : ven.jwt

                    })
                }).catch((err) =>{
                    console.log(ven) ;
                    swal("Could not get vendor data", "", "error")
                }

                )
        }
    }, [])


    return (
        <>
            {loggedIn ?
                (<>
                    <div className="jumbotron" style={{ marginLeft: 20 }}>
                        <h3 style={{ marginTop: 10 }}>Hello ,
                        </h3>
                        <h1 style={{ marginLeft: 30 }}>
                            {vendor.firstName + " " + vendor.lastName}
                        </h1>
                        <h5 style={{ marginLeft: 30 }}>
                            {vendor.email}
                        </h5>
                    </div>
                    <hr className="my-4" />

                    <div className="container" style={{ marginBottom: "50px", textAlign: "center" }}>
                        <div className="row" >
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/getAllApprovedVendors")}>
                                    <div className="card-body" >
                                        <h5 className="card-title">My Customer List</h5>
                                        <p className="card-text">List of All Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/getAllCustomers")}>
                                    <div className="card-body">
                                        <h5 className="card-title">My Tiffins List</h5>
                                        <p className="card-text">List of all provided tiffins</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/getUnapprovedVendors")}>
                                    <div className="card-body">
                                        <h5 className="card-title">My Orders </h5>
                                        <p className="card-text">List of all active orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/getBlockedVendors")}>
                                    <div className="card-body">
                                        <h5 className="card-title">My Profile</h5>
                                        <p className="card-text">View and update profile</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="row" >
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/disableSubscriptionPlan")}>
                                    <div className="card-body" >
                                        <h5 className="card-title">Disable Subscription Plan</h5>
                                        <p className="card-text">Make Subscription Plan Unavaliable for Purchase</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("/enableSubscriptionPlan")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Enable Subscription Plan</h5>
                                        <p className="card-text">Make Subscription Plan Avaliable for Purchase</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </>)

                : <div style={{ textAlign: "center" }}><h1>Please Log in to Access this page</h1></div>}
        </>
    )

}

export default Vendor;
