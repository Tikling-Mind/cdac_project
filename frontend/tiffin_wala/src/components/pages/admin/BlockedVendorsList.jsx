import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import vendorService  from "../../../service/VendorService"


const BlockedVendorList = () => {
    const [vendorList, setVendorList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        //axios.get(`${IP_ADDRS}/vendors/getAllBlockedVendors`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
        vendorService.getAllUnApprovedVendors()
            .then(res => {
                console.log(res.data);
                setVendorList(res.data);
            })
            .catch(err => {
                console.log(err);
                swal("Something went Wrong", "", "error")
            })
    }, [refreshFlag])

    const details = (d) => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        //axios.get(`${IP_ADDRS}/vendors/${d.id}/unblock`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
        vendorService.getAllUnApprovedVendors()
            .then(res => {
                setRefreshFlag(~refreshFlag);
            }).catch(err =>
                swal("Unable to Block", "", "error")
            );
    }

    return (
        <>
            <div className="container my-4">
                <div>
                    <h3>All Blocked Vendors</h3>

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
                            {vendorList.map((v, i) => {
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
                                        <td>
                                            <button className="btn btn-danger" onClick={() => details(v)}>UnBlock</button>
                                        </td>
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
export default BlockedVendorList;