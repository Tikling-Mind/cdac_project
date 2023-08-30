import React, { useEffect } from "react";
import Card from "./CardUI";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant"

const SP_Cards = (props) => {

    const [subscriptionPlans, setSubcriptionPlans] = useState([]);

    useEffect(() => {
        //Getting Plans Provided by Vendor
        axios
            .get(`${IP_ADDRS}/vendors/getAllAvaliablePlanByVendorId/${props.id}`)
            .then((res) => {
                console.log(res.data);
                setSubcriptionPlans(res.data);
            })
            .catch((err) => {
                console.log(err);
                swal("Something went Wrong", "", "error");
            });
    }, []);

    return (
        <div className="row row-cols-3 row-cols-md-4 g-4">
            {subscriptionPlans.map((sp, i) => {
                return <div className="col" key={sp.id}>
                    <Card imgsrc={`${IP_ADDRS}/subscription/${sp.id}/dp`} name={sp.name} resrc={"subcription/plan"} id={sp.id} />
                </div>
            })}
        </div>
    );
};

export default SP_Cards;
