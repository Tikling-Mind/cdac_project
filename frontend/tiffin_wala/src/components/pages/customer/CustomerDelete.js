import React, { useState, useEffect } from 'react';
import VendorList from "../vendor/VendorList"
import CustomerList from "./CustomerList"


const CustomerDelete = (props) => {
    return (
        <div>
        <div class="d-flex flex-row-reverse">
            <div className='flex-fill mx-2'><VendorList /></div>
            <div className='flex-fill mx-2'><CustomerList /></div>
        </div>
        </div>
    )
}

export default CustomerDelete;