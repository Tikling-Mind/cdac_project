import React, { useState, useEffect } from 'react';
import VendorApprovalList from "./VendorApprovalList"


const CustomerList = (props) => {
    return (
        <div>
            <div class="d-flex flex-row-reverse">
                <div className='flex-fill mx-2'><CustomerList /></div>
            </div>
            <VendorApprovalList />
        </div>
    )

}

export default CustomerList;