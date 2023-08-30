import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../../service/BaseAddress"
import CustomerOrderService from "../../../service/CustomerOrderService"


const OrderByCustomer = () => {
    const [orderList, setOrderList] = useState([]);

    const {id} = useParams() ;

    const navigate = useNavigate();

    useEffect(() => {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        //axios.get(`${IP_ADDRS}/orders/getAllOrderByCustomerId/${cust.id}`, { headers: { "Authorization": `Bearer ${cust.jwt}` } })
        CustomerOrderService.getOrdersByCustomerId(id)    
        .then(res => {
                console.log(res.data);
                setOrderList(res.data);

            })
            .catch(err => {
                console.log(err);
                swal("Something went Wrong", "", "error")
            })


    }, [])

    return (
        <>
            <div className="container my-4">
                <div>
                    <h3>All Orders for this Customer</h3>

                    <table className="table table-bordered" style={{ textAlign: "center" }}>
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Id</th>
                                <th>Customer Name </th>
                                <th>Customer Address </th>
                                <th>Order Start Date</th>
                                <th>Order End Date</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.map((v, i) => {
                                return (
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td>{v.id}</td>
                                        <td><a href={`/subcription/plan/${v.planIds}`}>{v.name}</a></td>

                                        <td>{v.price}</td>
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

export default OrderByCustomer;