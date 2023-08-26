import React, { useState, useEffect } from 'react';
import UserWelcome from "../common/UserWelcome" ;
import CustomerTiffinList from "./CustomerTiffinList.jsx" ;

const CustomerHome = ()=>{
    return (<div>
         {/* a welcome message to the user */}
            <UserWelcome />

        {/* Tiffins subscribed the the Customer */}
            <CustomerTiffinList /> 
        </div>
    );


};

export default CustomerHome ;