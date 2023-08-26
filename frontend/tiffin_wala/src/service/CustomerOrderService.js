import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const orderURL = IP_ADDRS + "/order/"

class OrderService{

    createOrder(order){
        return axios.post(orderURL, order) ;
    }

    getOrder(id){
        return axios.get(orderURL+id) ;
    }

    // Get all orders
    getOrdersList(){
        return axios.get(orderURL) ;
    }

    // Get all orders for a tiffin
    getOrdersByTiffin(id){
        return axios.get(orderURL+"tiffin/"+id) ;
    }

    getOrdersByVendorId(id){
        return axios.get(orderURL+"vendor/"+id) ;
    }

    getOrdersByCustomerId(id){
        return axios.get(orderURL+"customer/"+id) ;
    }

    updateOrder(order){
        return axios.put(orderURL, order) ;
    }

    deleteOrder(id){
        return axios.delete(orderURL+id) ;
    }

}

export default new OrderService();