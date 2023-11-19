import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '14px',
  };

  const errorMessageStyle = {
    color: 'red',
  };

  const notificationStyle = {
    color: 'red',
  };

  const submitButtonContainerStyle = {
    textAlign: 'left',
  };

  const submitButtonStyle = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '30px',
    backgroundColor: '#3dfaff',
    cursor: 'pointer',
    width: '30%',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? '' : 'Invalid email address',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error !== '')) {
      console.error('Form has validation errors. Please correct them.');
      return;
    }
    console.log('Form submitted with data:', formData);
    alert('Data Submitted');
  };

  return (
    <div style={containerStyle}>
      <br/>
      <h3>Contact</h3>
      <br/>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {errors.name && (
            <span style={errorMessageStyle}>{errors.name}</span>
          )}
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {errors.email && (
            <span style={errorMessageStyle}>{errors.email}</span>
          )}
        </label>
        <label style={labelStyle}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <div style={submitButtonContainerStyle}>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </div>
        {(errors.name || errors.email) && (
          <div style={notificationStyle}>
            Please fill in the required fields.
          </div>
        )}
      </form>
    </div>
  );
}



