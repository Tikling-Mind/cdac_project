import React, { useState, useEffect } from 'react';
import swal from "sweetalert";
import CustomerOrderService from '../../../service/CustomerOrderService';
import moment from "moment";

const CustomerTiffinList = () => {

    const [tiffinList, setTiffinList] = useState([]);

    useEffect(() => {
        // let cust = JSON.parse(sessionStorage.getItem("customer")) ;
        let cust = {
            id: 4,
            firstName: "Pradeep",
            lastName: "Borade",
            email: "pradipborade911@gmail.com",
            mobile: "9172467135",
            registerDate: new Date("July 21, 1983 01:15:00").toLocaleString()
        }
        CustomerOrderService.getOrdersByCustomerId(cust.id)
            .then(res => {
                console.log(res.data);
                setTiffinList(res.data);
            })
            .catch(err => {
                console.log(err);
                swal(err);
            })
    }, []);

    return (<>
        <div className="container my-4">
            <div>
                <h3>All Orders Placed</h3>

                <table className="table table-bordered" style={{ textAlign: "center" }}>
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>Id</th>
                            <th>Breakfast Quantity</th>
                            <th>Lunch quantity-</th>
                            <th>Dinner Quantity</th>
                            <th>Order Start Date</th>
                            <th>Order End Date</th>
                            {/*<th>Delivery Address</th>*/}
                            <th>Delivery Note</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tiffinList.map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td>{order.id}</td>
                                    <td>{order.breakfastQuantity}</td>
                                    <td>{order.lunchQuantity}</td>
                                    <td>{order.dinnerQuantity}</td>
                                    <td>{order.orderStartDate}</td>
                                    <td>{order.orderEndDate}</td>
                                    {/*<td>{order.deliveryAddress}</td>*/}
                                    <td>{order.deliveryNote}</td>
                                    <td>{(order.tiffin.price*order.breakfastQuantity
                                    +order.tiffin.price*order.dinnerQuantity)
                                    *(moment(order.orderEndDate)).diff(moment(order.orderStartDate), "days")}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};


export default CustomerTiffinList;