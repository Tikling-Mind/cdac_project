import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const vendorURL = IP_ADDRS + "/vendor/"


class VendorService{
    createVendor(vendor){
        return axios.post(vendorURL, vendor) ;
    }

    getVendor(id, jwt){
        console.log(jwt+ " GEt vendor")
        return axios.get(vendorURL+id, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    // Get all (approved + unapproved) vendors
    getVendorsList(jwt){
        return axios.et(vendorURL, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    // Get all approved Vendors
    getAllApprovedVendors(){
        return axios.get(vendorURL+"approved")
    }

    // Get all Unapproved Vendors
    getAllUnApprovedVendors(jwt){
        return axios.get(vendorURL+"unapproved", { headers: { "Authorization": `Bearer ${jwt}` } })
    }

    updateVendor(vendor, jwt){
        return axios.put(vendorURL, vendor, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    deleteVendor(id, jwt){
        return axios.delete(vendorURL+id, { headers: { "Authorization": `Bearer ${jwt}` } })
    }

    changeBlockingStatus(vendor,jwt){
        return axios.patch(vendorURL +"status/block", vendor,{ headers: { "Authorization": `Bearer ${jwt}` } })
    }

    approveVendor(id, user, jwt){
        return axios.patch(vendorURL+"approve/"+id, user,{ headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    changeVendorAvailability(vendor, jwt){
        return axios.patch(vendorURL+"status/available",vendor, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }


    // Get all Customers for a vendor
    getCustomersForVendor(id, jwt){
        return axios.get(vendorURL+"/vendor/"+id, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }
}

export default new VendorService();