import { IP_ADDRS } from "./BaseAddress";
import axios from "axios";

const tiffinURL = IP_ADDRS + "/tiffin/"

class TiffinService{
    createTiffin(tiffin){
        return axios.post(tiffinURL, tiffin) ;
    }

    getTiffin(id){
        return axios.get(tiffinURL+id) ;
    }

    // Get all tiffins
    getTiffinsList(){
        return axios.get(tiffinURL) ;
    }

    // Get all available Tiffins
    getAllAvailableTiffins(){
        return axios.get(tiffinURL+"available") ;
    }

    // Get all available Tiffins
    getAllUnAvailableTiffins(){
        return axios.get(tiffinURL+"unavailable") ;
    }

    // Get all Unapproved Tiffins
    // 0 -> Veg, 1-> Non-veg
    getTiffinsByType(type=0){
        return axios.get(tiffinURL+"type/"+type) ;
    }

    getTiffinsByVendorId(id){
        return axios.get(tiffinURL+"vendor/"+id)    }

    updateTiffin(tiffin){
        return axios.put(tiffinURL, tiffin) ;
    }

    deleteTiffin(id){
        return axios.delete(tiffinURL+id) ;
    }

    blockTiffinById(id){
        return axios.patch(tiffinURL+ id) ;
    }
}

export default new TiffinService();