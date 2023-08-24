import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const vendorURL = IP_ADDRS + "/vendor/"

class VendorService{
    createVendor(vendor){
        return axios.post(vendorURL, vendor) ;
    }

    getVendor(id){
        return axios.get(vendorURL+id) ;
    }

    // Get all (approved + unapproved) vendors
    getVendorsList(){
        return axios.get(vendorURL) ;
    }

    // Get all approved Vendors
    getAllApprovedVendors(){
        return axios.get(vendorURL+"approved")
    }

    // Get all Unapproved Vendors
    getAllUnApprovedVendors(){
        return axios.get(vendorURL+"unapproved")
    }

    updateVendor(vendor){
        return axios.put(vendorURL, vendor) ;
    }

    deleteVendor(id){
        return axios.delete(vendorURL+id)
    }

    changeBlockingStatus(vendor){
        return axios.patch(vendorURL +"/status", vendor)
    }

    approveVendor(id){
        return axios.patch(vendorURL+"approve/"+id) ;
    }

    changeVendorAvailability(vendor){
        return axios.patch(vendorURL+"status/available",vendor) ;
    }


    // Get all Customers for a vendor
    getCustomersForVendor(id){
        return axios.get(vendorURL+"/vendor/"+id) ;
    }
}

export default new VendorService();