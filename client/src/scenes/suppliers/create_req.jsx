import React from 'react';

const CreateReq = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    shadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
   
    <div style={containerStyle}>
        <h1>Register</h1>
      <form style={formStyle}>
        <label style={labelStyle}>First Name</label>
        <input style={inputStyle} type="text" />

        <label style={labelStyle}>Last Name</label>
        <input style={inputStyle} type="text" />

        <label style={labelStyle}>Email</label>
        <input style={inputStyle} type="email" />

        <label style={labelStyle}>Password</label>
        <input style={inputStyle} type="password" />

        <label style={labelStyle}>Confirm Password</label>
        <input style={inputStyle} type="password" />

        <button style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

export default CreateReq;