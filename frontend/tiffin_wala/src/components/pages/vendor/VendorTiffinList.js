import React, { useState, useEffect } from 'react';
import VendorList from "./VendorList"
import CustomerList from "../customer/CustomerList"



const VendorTiffinList = (props) => {
    return (
        <div>
        <div class="d-flex flex-row-reverse">
            <div className='flex-fill mx-2'><VendorList /></div>
            <div className='flex-fill mx-2'><CustomerList /></div>
        </div>
        
        </div>
    )

}

export default VendorTiffinList;