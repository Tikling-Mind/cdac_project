import React from "react";
import { useNavigate } from 'react-router-dom';
import "./CardStyle.css"

const Card = props => {

    const navigate = useNavigate();

    return (
        <div id="cardStyle" className="card text-center shadow w-100" onClick={() => navigate(`/${props.resrc}/${props.id}`)}>
            <div className="overflow">
                <img src={props.imgsrc} alt={props.imgsrc} className="card-img-top" height={225} />
                <h4 className="card-title">{props.name}</h4>
            </div>

        </div>);
}

export default Card;

