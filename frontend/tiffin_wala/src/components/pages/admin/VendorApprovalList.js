import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorService from "../../../service/VendorService";
const VendorApprovalList = () => {
    const [vendors, setVendors] = useState([]);



    useEffect(() => {
        let v1 = {
            id: 1,
            firstName: "Pradeep",
            lastName: "Borade",
            email: "pradipborade911@gmail.com",
            mobile: "9172467135",
            registerDate: new Date("July 21, 1983 01:15:00").toLocaleString()
        };
        setVendors([v1, v1, , v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1]);
    })

// Define the approveVendor function
let approveVendor = (id) => {
    // Call the approveVendor method of VendorService with the provided id
    VendorService.approveVendor(id)
        .then((result) => {
            // This block executes if the vendor approval is successful
            console.log(result); // Log the result to the console
            setVendors([]);
        })
        .catch(() => {
            // This block executes if there's an error during vendor approval
            // The catch block is currently empty, so errors won't be logged or handled here
        });
};


    return (
        <div>
            <h2>Approve new vendors</h2>
            <div className="table-responsive"  style={{ maxHeight: '250px' }}>
            <table className="table table-striped">
                <thead style={{ position: 'sticky', top: 0, background: 'white' }}>
                    <tr>
                        <th scope="col">Vendor Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Register Date</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor) => <tr key={vendor.id}>
                        <td>{vendor.firstName} {vendor.lastName}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.mobile}</td>
                        <td>{vendor.registerDate}</td>
                        {<td>
                            {<button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { this.approveVendor(vendor.id) }}>Approve</button>}
                        </td>}

                    </tr>)}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default VendorApprovalList;