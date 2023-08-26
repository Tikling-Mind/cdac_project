import React, { useState, useEffect } from "react";

const UserWelcome = ({user}) => {
    console.log(user.firstName)
    return (
        <div>
            <h4> Hello, {user.firstName} {user.lastName}.</h4>
        </div>
    );
};

export default UserWelcome ;