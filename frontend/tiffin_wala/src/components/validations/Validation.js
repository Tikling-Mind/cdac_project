import swal from "sweetalert";

export const validateMobile = (mobNo) => {
    const phoneno = /^\d{10}$/;
    if (phoneno.test(mobNo)) {
        return true;
    } else {
        swal("Invalid mobile number", "", "error");
        return false;
    }
};

export const validateName = (name) => {
    const namePattern = /^[a-zA-Z]{1,256}$/;
    if (namePattern.test(name)) {
        return true;
    } else {
        swal("Invalid name", "", "error");
        return false;
    }
};

export const validatePincode = (pin) => {
    const pincode = /^\d{6}$/;
    if (pincode.test(pin)) {
        return true;
    } else {
        swal("Invalid Pincode", "", "error");
        return false;
    }
};

export const validatePassword = (passwd) => {
    const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (paswd.test(passwd)) {
        return true;
    } else {
        // swal("Password too weak!", "", "error");
        return false;
    }

};

export const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
        return true;
    } else {
        // swal("Invalid email address!", "", "error");
        return false;
    }

};

export const validateUserRole = (role) => {
    if (role === "ROLE_CUSTOMER" || role === "ROLE_ADMIN" || role === "ROLE_VENDOR") {
        return true;
    } else {
        return false;
    }
};
