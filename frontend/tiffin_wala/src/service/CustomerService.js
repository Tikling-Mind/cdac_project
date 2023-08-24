import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const customerURL = IP_ADDRS + "/customer/"
class CustomerService{
    // Create new Customer
    createCustomer(customer){
        return axios.post(customerURL, customer) ;
    }

    getCustomer(id){
        return axios.get(customerURL+id) ;
    }

    getCustomerList(){
        return axios.get(customerURL) ;
    }

    updateCustomer(customer){
        return axios.put(customerURL, customer) ;
    }

    deleteCustomer(id){
        return axios.delete(customerURL+id)
    }

    changeBlockingStatus(customer){
        return axios.patch(customerURL+"/status", customer)
    }
}

export default new CustomerService() ;