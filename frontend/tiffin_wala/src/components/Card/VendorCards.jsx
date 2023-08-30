import React, { useEffect } from "react";
import Card from "./CardUI";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { IP_ADDRS } from "../../service/BaseAddress"

const Cards = () => {

    const [vendorList, setVendorList] = useState([]);

    useEffect(() => {
        axios
            .get(`${IP_ADDRS}/vendors/allvendors`)
            .then((res) => {
                console.log(res.data);
                setVendorList(res.data);
            })
            .catch((err) => {
                console.log(err);
                swal("Something went Wrong", "", "error")
            });
    }, []);

    return (
        <div className="row row-cols-3 row-cols-md-4 g-4">
            {vendorList.map((v, i) => {
                return <div className="col" key={v.id}>
                    <Card imgsrc={`${IP_ADDRS}/vendors/${v.id}/profileImage`} name={v.firstName} resrc={"vendor"} id={v.id} />
                </div>
            })}
        </div>
    );
};

export default Cards;
