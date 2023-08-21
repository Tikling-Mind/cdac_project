import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);



    useEffect(() => {
        let v1 = {
            id: 1,
            firstName: "Pradeep",
            lastName: "Borade",
            email: "pradipborade911@gmail.com",
            mobile: "9172467135",
            registerDate: new Date("July 21, 1983 01:15:00").toLocaleString()
        };
        setCustomers([v1, v1, v1, v1, v1, v1, v1, v1, v1, v1]);
    })


    return (
        <div>
            <h2>Customers</h2>

            <div className="table-responsive"  style={{ maxHeight: '250px' }}>
                <table className="table table-striped">
                    <thead style={{ position: 'sticky', top: 0, background: 'white' }}>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Register Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => <tr key={customer.id}>
                            <td>{customer.firstName} {customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.registerDate}</td>

                            {/* <td>
                            <Link to={`/edit/${emp.empid}`} state={{ emp: emp }}>
                                <button type="button" name="btn" id="btn" className="btn btn-info">edit</button>
                            </Link>&nbsp;&nbsp;&nbsp;

                            <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { this.deleteemployee(emp.empid) }}>delete</button>
                        </td> */}

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerList;