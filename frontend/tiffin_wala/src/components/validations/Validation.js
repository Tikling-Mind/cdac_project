
export const validateMobile = (mobNo) => {
    var phoneno = /^\d{10}$/;
    if(mobNo.value.match(phoneno))
        return true;
    else
    {
       alert("Invalid mobile number");
       return false;
    }
}

export const validateName = (name) => {
    var namePattern = /^[a-zA-Z]{1,256}$/;
    if(name.value.match(namePattern))
        return true;
    else
    {
       alert("Invalid mobile number");
       return false;
    }
}

export const validatePincode = (pin) => {
    var pincode = /^\d{6}$/;
    if(pin.value.match(pincode))
        return true;
    else
    {
       alert("Invalid Pincode");
       return false;
    }
}

export const validatePassword = (passwd) => {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(passwd.value.match(paswd)) 
        return true;
    else
    { 
        alert('Password too weak!')
        return false;
    }
}

export const validateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
        return true;
    else
    {
        alert("Invalid email address!");
        return false;
    }
}
export const validateUserRole = (role) =>{
    if (role==="ROLE_CUSTOMER" || role === "ROLE_ADMIN" || role ==="ROLE_VENDOR")
        return true ;
    else 
        return false ;
}  
