import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import customerService  from "../../../service/CustomerService"
import VendorService from "../../../service/VendorService";
// import BlockCustomer from "./BlockCustomer";

const VendorsCustomersList = () => {
    const [customersList, setCustomersList] = useState([]);
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
        let vend = JSON.parse(sessionStorage.getItem("vendor"));
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

        VendorService.getCustomersForVendor(3)
        .then(res => {
            console.log(res.data);
            setCustomersList(res.data);
        })
        .catch(err => {
            console.log(err);
            swal(err);
        })

    }, []);


    // const changeBlockingStatus = (d) => {
    //     let admin = JSON.parse(sessionStorage.getItem("admin"));
    //     //axios.get(`${IP_ADDRS}/vendors/${d.id}/unblock`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
    //     customerService.changeBlockingStatus(d.id, admin.jwt)
    //         .then(res => {
    //             setRefreshFlag(~refreshFlag);
    //         }).catch(err =>
    //             d.isBlocked
    //             ?swal("Unable to Unblock", "", "error")
    //             :swal("Unable to Block", "", "error")
    //         );
    // }

    return (
        <>dfdfg     
            <div className="container my-4">
                <div>
                    <h3>All Customers</h3>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {customersList.map((v, i) => {
                                return (
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td>{v.firstName}</td>
                                        <td>{v.lastName}</td>
                                        <td>{v.email}</td>
                                        {/* <td>{v.fees}</td>
                                        <td>{v.address[0].town}</td>
                                        <td>{v.address[0].city}</td>
                                        <td>{v.address[0].state}</td> */}
                                        {/* <td>
                                            v.isBlocked                                          
                                            ?   <button className="btn btn-danger" onClick={() => changeBlockingStatus(v)}>UnBlock</button>
                                            :   <button className="btn btn-danger" onClick={() => changeBlockingStatus(v)}>Block</button>
                                        </td> */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default VendorsCustomersList;