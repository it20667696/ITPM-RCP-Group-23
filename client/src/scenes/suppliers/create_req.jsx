import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateReq = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const formContainerStyle = {
    width: '500px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',  };

  const inputStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const submitButtonStyle = {
    padding: '10px',
    width: '100%',
    backgroundColor: 'blue',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Create Collect Request</h2>
        <form>
          <TextField
            id="outlined-fullName-input"
            label="Address"
            type="text"
            margin="none"
            style={inputStyle}
          />
          <TextField
            id="outlined-email-input"
            label="Time"
            type="time"
            margin="none"
            style={inputStyle}
          />
          <TextField
            id="outlined-password-input"
            label="Date"
            type="date"
            margin="none"
            style={inputStyle}
          />
           <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          style={inputStyle}
          InputLabelProps={{
            shrink: true,
          }}
        />

          <TextField
            id="outlined-address-input"
            label="Quality"
            type="dropdown"
            margin="none"
            style={inputStyle}
          />

          <TextField
            id="outlined-address-input"
            label="Address"
            type="text"
            margin="none"
            style={inputStyle}
          />
          <button style={submitButtonStyle} type="submit">
            Create Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReq;
