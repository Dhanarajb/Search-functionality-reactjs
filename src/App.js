import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      errors.name = 'Please enter your name';
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'Please enter a password';
    } else if (formData.password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      isValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <span>{formErrors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
