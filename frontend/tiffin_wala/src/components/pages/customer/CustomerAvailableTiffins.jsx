import React, { useState, useEffect } from 'react';
import swal from "sweetalert";
import TiffinService from '../../../service/TiffinService';
import CustomerOrderService from '../../../service/CustomerOrderService';
import { useNavigate } from 'react-router-dom';


const CustomerAvailableTiffins = (props) => {

    const [tiffinList, setTiffinList] = useState([]);
    const navigate = useNavigate() ;
    useEffect(() => {
        // let cust = JSON.parse(sessionStorage.getItem("customer")) ;
        // let cust = {
        //     id: 4,
        //     firstName: "Pradeep",
        //     lastName: "Borade",
        //     email: "pradipborade911@gmail.com",
        //     mobile: "9172467135",
        //     registerDate: new Date("July 21, 1983 01:15:00").toLocaleString()
        // }
        TiffinService.getAllAvailableTiffins()
            .then(res => {
                console.log(res.data);
                setTiffinList(res.data);
            })
            .catch(err => {
                console.log(err);
                swal(err);
            })
    }, []);

    const orderTiffin=(tiffin) => {
        let cust = JSON.parse(sessionStorage.getItem("customer"))
        if(cust == null )
            swal("Please login to order tiffin","","error")
        else{
            navigate("/placeOrder") ;
        } 

    }
    return (<>
        <div className="container my-4">
            <div>
                <h3>All available tiffins</h3>

                <table className="table table-btiffined" style={{ textAlign: "center" }}>
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Food Type-</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner  </th>
                            <th>Description</th>
                            <th>Available from</th>
                            <th>Available Till</th>
                            <th>Vendor</th>
                            <th>Price</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tiffinList.map((tiffin, index) => {
                            return (
                                <tr key={index}>
                                    <td>{tiffin.id}</td>
                                    <td>{tiffin.name}</td>
                                    <td>{tiffin.foodType}</td>
                                    <td>{Math.floor(tiffin.breakLunchDinner/100)%10?"Yes":"No"}</td>
                                    <td>{Math.floor(tiffin.breakLunchDinner/10)%10?"Yes":"No"}</td>
                                    <td>{tiffin.breakLunchDinner%10?"Yes":"No"}</td>
                                    <td>{tiffin.description}</td>
                                    <td>{tiffin.availableFrom}</td>
                                    <td>{tiffin.availableTo}</td>
                                    <td>{tiffin.vendor.firstName}</td>
                                    <td>{tiffin.price}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => orderTiffin(tiffin)}> Order </button>
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


export default CustomerAvailableTiffins;