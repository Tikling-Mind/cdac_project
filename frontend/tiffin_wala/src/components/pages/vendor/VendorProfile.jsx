import React, { useState, useEffect } from 'react';
import VendorList from "./VendorList"
import swal from "sweetalert";
import { useNavigate, useParams } from 'react-router-dom';
import VendorService from '../../../service/VendorService';



const VendorProfile = (props) => {

    const [vendor, setVendor] = useState({
        email: "",
        id: "",
        jwt: ""
    });

    const [vednorDetails, setvednorDetails] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let vend = JSON.parse(sessionStorage.getItem("vendor"));

        VendorService.getVendor(3)
            .then(res => {
                console.log(res.data);
                setvednorDetails(res.data);
            })
            .catch(err => {
                console.log(err);
                swal(err);
            })

        if (vend == null) {
            //swal("Not Authorized", "", "error");
        }
        else {
            setLoggedIn(true);
            setVendor({
                id: vend.id,
                email: vend.email,
                jwt: vend.jwt
            })
        }

    }, []);

    const updateProfile = (vednorDetails) => {
        let cust = JSON.parse(sessionStorage.getItem("vendor"))
        if (cust == null)
            swal("Please login to update tiffin", "", "error")
        else {
            navigate("/placeOrder");
        }

    }


    return (true ? (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Hello {vednorDetails.firstName + " " + vednorDetails.lastName}</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="mb-3">
                                                <h6>Mobile</h6>
                                                <p className="text-muted">{vednorDetails.mobile}</p>
                                            </div>
                                            <div className="mb-3">
                                                <h6>Address</h6>
                                                <p className="text-muted">{/*
                                                    vednorDetails.address.line1 + ", "
                                                    + vednorDetails.address.line2 + ", "
                                                    + vednorDetails.address.pincode + ", "
                                                    + vednorDetails.address.state*/}</p>
                                            </div>
                                            <div className="mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{vednorDetails.email}</p>
                                            </div>
                                            <div className="mb-3">
                                                <h6>Availability</h6>
                                                <p className="text-muted">{vednorDetails.isAvailable ? "Yes" : "No"}</p>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <button className="btn btn-primary" onClick={() => updateProfile(vednorDetails)}> Edit Profile </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>) : <div style={{ textAlign: "center" }}><h1>Please Log in to Access this page</h1></div>

    )

}

export default VendorProfile;