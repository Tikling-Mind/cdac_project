import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import vendorService from "../../../service/VendorService"

//path: getAllApprovedVendors

const ApprovedVendorList = () => {

    const [vendorList, setVendorList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const navigate = useNavigate();
    const vendorURL = IP_ADDRS + "/vendor/"

    useEffect(() => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        //axios.get(`${IP_ADDRS}/vendors/allvendors`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
        vendorService.getAllApprovedVendors()
            .then(res => {
                console.log(res.data);
                setVendorList(res.data);
            })
            .catch(err => {
                console.log(err);
                swal("Something went Wrong", "", "error")
            })
    }, [refreshFlag])

    const changeBlockingStatus = (d) => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        d.blocked = !d.blocked ;
        //axios.get(`${IP_ADDRS}/vendors/${d.id}/block`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
        vendorService.changeBlockingStatus(d,admin.jwt) 
            .then(res => {
                setRefreshFlag(!refreshFlag);
            }).catch(err =>
                d.blocked
                ?   swal("Unable to UnBlock", "", "error")
                :   swal("Unable to Block", "", "error")
                    );
    }

    return (
        <>
            <div className="container my-4">
                <div>
                    <h3>All Approved Vendors</h3>

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
                                            {v.blocked?
                                                <button className="btn btn-danger" onClick={() => changeBlockingStatus(v)}>Unblock</button>
                                            :
                                                <button className="btn btn-danger" onClick={() => changeBlockingStatus(v)}>Block</button>
                                            }
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
export default ApprovedVendorList;