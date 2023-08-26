import React, { useState, useEffect } from 'react';
import swal from "sweetalert" ;

import CustomerOrderService from '../../../service/CustomerOrderService';

const CustomerTiffinList= () =>{

    const [tiffinList, setTiffinList] = useState([]) ;

    useEffect(() => {
        let cust = JSON.parse(sessionStorage.getItem("customer")) ;
        CustomerOrderService.getOrdersByCustomerId(cust.id)
            .then(res => {
                console.log(res.data) ;
                setTiffinList(res.data) ;
            })
            .catch(err => {
                console.log(err) ;
                swal(err) ;
            })
    },[]) ;

    return (<> 
            <div className="container my-4">
                <div>
                    <h3>All Orders Placed</h3>

                    <table className="table table-bordered" style={{ textAlign: "center" }}>
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Id</th>
                                <th>Lunch quantity-</th>
                                <th>Plan </th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiffinList.map((v, i) => {
                                return (
                                    <tr key={v.lunchquan}>
                                        <td>{v.id}</td>
                                        <td>{v.dateTime}</td>
                                        <td><a href={`/subcription/plan/${v.planIds}`}>{v.name}</a></td>

                                        <td>{v.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </> ) ;
} ;


export default CustomerTiffinList ;