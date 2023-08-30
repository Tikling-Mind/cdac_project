import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"


function Admin() {
    const [admin, setAdmin] = useState({
        email: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {       
        let adm = JSON.parse(sessionStorage.getItem("admin"));
        if (adm == null) {
            swal("Not Authorized", "", "error");
        }
        else {
            setLoggedIn(true);
            setAdmin({
                id: adm.id,
                email: adm.email,
                jwt: adm.jwt
            })
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
                            Admin
                        </h1>
                        <h5 style={{ marginLeft: 30 }}>
                            {admin.email}
                        </h5>
                    </div>
                    <hr className="my-4" />

                    <div className="container" style={{ marginBottom: "50px", textAlign: "center" }}>
                        <div className="row" >
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("getAllApprovedVendors")}>
                                    <div className="card-body" >
                                        <h5 className="card-title">Approved Vendors</h5>
                                        <p className="card-text">List of All Vendors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("getAllCustomers")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Get All Customers</h5>
                                        <p className="card-text">List of All Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("getAllUnApprovedVendors")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Unapproved Vendors</h5>
                                        <p className="card-text">List of all Unapproved Vendors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("getAllBlockedVendors")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Blocked Vendors</h5>
                                        <p className="card-text">List of Blocked Vendors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card" onClick={() => navigate("getAllBlockedCustomers")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Blocked Customers</h5>
                                        <p className="card-text">List of all Customers</p>
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

export default Admin;