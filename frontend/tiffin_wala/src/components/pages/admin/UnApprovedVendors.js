import React, { useState, useEffect } from 'react';
import VendorList from "../vendor/VendorList"
import CustomerList from "./CustomersList"
import VendorApprovalList from "./VendorApprovalList"


const UnApprovedVendors = (props) => {
    return (
        <div>
            <div class="d-flex flex-row-reverse">
                <div className='flex-fill mx-2'><VendorList /></div>
                <div className='flex-fill mx-2'><CustomerList /></div>
            </div>
            <VendorApprovalList />
        </div>
    )

}

export default UnApprovedVendors;