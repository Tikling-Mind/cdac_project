import React, { useState, useEffect } from 'react';
import VendorList from "./VendorList"



const OrderByCustomer = (props) => {
    return (
        <div>
        <div class="d-flex flex-row-reverse">
            <div className='flex-fill mx-2'><VendorList /></div>
        </div>
        
        </div>
    )

}

export default OrderByCustomer;