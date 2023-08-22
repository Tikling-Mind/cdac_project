import VendorList from "./VendorList"
import CustomerList from "./CustomerList"
import VendorApprovalList from "./VendorApprovalList"


const VendorHome = (props) => {
    return (
        <div>
        <div class="d-flex flex-row-reverse">
            <div className='flex-fill mx-2'><VendorList /></div>
            <div className='flex-fill mx-2'><CustomerList /></div>
        </div>
        <VendorApprovalList/>
        </div>
    )

}

export default VendorHome;