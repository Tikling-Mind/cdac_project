import React, { useState } from 'react';
import swal from 'sweetalert';
import {
  validateMobile,
  validateName,
  validatePincode,
  validatePassword,
  validateEmail,
  validateUserRole,
} from '../validations/Validation';

function ValidationTestForm() {
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    pincode: '',
    password: '',
    email: '',
    userRole: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      validateMobile(formData.mobile) &&
      validateName(formData.name) &&
      validatePincode(formData.pincode) &&
      validatePassword(formData.password) &&
      validateEmail(formData.email) &&
      validateUserRole(formData.userRole)
    ) {
      // All validations passed
      swal('All fields are valid!', '', 'success');
    }
  };

  return (
    <div className="validation-test-form">
      <h2>Validation Test Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mobile: </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode: </label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>User Role: </label>
          <input
            type="text"
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Test Validations</button>
      </form>
    </div>
  );
}

export default ValidationTestForm;
