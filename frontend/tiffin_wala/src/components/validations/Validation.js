import swal from "sweetalert";

export const validateMobile = (mobNo) => {
    var phoneno = /^\d{10}$/;
    if(mobNo.match(phoneno))
        return true;
    else
    {
       swal("Invalid mobile number","","error");
       return false;
    }
}

export const validateName = (name) => {
    var namePattern = /^[a-zA-Z]{1,256}$/;
    if(name.match(namePattern))
        return true;
    else
    {
       swal("Invalid mobile number","","error");
       return false;
    }
}

export const validatePincode = (pin) => {
    var pincode = /^\d{6}$/;
    if(pin.match(pincode))
        return true;
    else
    {
       swal("Invalid Pincode","","error");
       return false;
    }
}

export const validatePassword = (passwd) => {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(passwd.match(paswd)) 
        return true;
    else
    { 
        swal('Password too weak!',"","error")
        return false;
    }
}

export const validateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
        return true;
    else
    {
        swal("Invalid email address!","","error");
        return false;
    }
}
export const validateUserRole = (role) =>{
    if (role==="ROLE_CUSTOMER" || role === "ROLE_ADMIN" || role ==="ROLE_VENDOR")
        return true ;
    else 
        return false ;
}  
