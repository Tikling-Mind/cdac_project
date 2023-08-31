import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import customerService  from "../../../service/CustomerService"
import VendorService from '../../../service/VendorService';
// import BlockCustomer from "./BlockCustomer";

const CustomersByVendor = () => {
    const [customersList, setCustomersList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        //axios.get(`${IP_ADDRS}/vendors/getAllBlockedVendors`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
        VendorService.getCustomersByVendorId(admin.id, admin.jwt)
            .then(res => {
                setCustomersList(res.data);
            })
            .catch(err => {
                console.log(err);
                swal("Something went Wrong", "", "error")
            })
    }, [refreshFlag])

    // const changeBlockingStatus = (user) => {
    //     let admin = JSON.parse(sessionStorage.getItem("admin"));
    //     //axios.get(`${IP_ADDRS}/vendors/${d.id}/unblock`, { headers: { "Authorization": `Bearer ${admin.jwt}` } })
    //     customerService.changeBlockingStatus(user ,admin.jwt)
    //         .then(res => {
    //             setRefreshFlag(!refreshFlag);
    //         }).catch(err =>
    //             user.isBlocked
    //             ?swal("Unable to Unblock", "", "error")
    //             :swal("Unable to Block", "", "error")
    //         );
    // }

    return (
        <>
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
export default CustomersByVendor;