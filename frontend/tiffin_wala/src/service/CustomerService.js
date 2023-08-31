import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const customerURL = IP_ADDRS + "/customer/"
class CustomerService{

    createCustomer(customer){
        return axios.post(customerURL, customer) ;
    }

    getCustomer(id, jwt){
        return axios.get(customerURL+id, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    getCustomerList(jwt){
        return axios.get(customerURL, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    updateCustomer(customer, jwt){
        return axios.put(customerURL, customer, { headers: { "Authorization": `Bearer ${jwt}` } }) ;
    }

    deleteCustomer(id, jwt){
        return axios.delete(customerURL+id, { headers: { "Authorization": `Bearer ${jwt}` } })
    }

    changeBlockingStatus(user,jwt){
        return axios.patch(customerURL+"block/", user , { headers: { "Authorization": `Bearer ${jwt}` } })
    }
}

export default new CustomerService() ;