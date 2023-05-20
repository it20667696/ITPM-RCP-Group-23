import React from 'react';

const Supplier_Dash = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const paragraphContainerStyle = {
    width: '60%', //  width to 80%
    textAlign: 'center',
    padding: '200px', // Increased padding for vertical spacing
    margin: '100px', // Increased margin for vertical spacing
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    
    };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <div style={{ width: '33.33%', margin: '20px 100px 100px 20px' }}>
          <button style={buttonStyle}>Button 1</button>
        </div>
        <div style={{ width: '33.33%', margin: '20px 100px 100px 20px' }}>
          <button style={buttonStyle}>Button 2</button>
        </div>
        <div style={{ width: '33.33%', margin: '20px 100px 100px 20px' }}>
          <button style={buttonStyle}>Button 3</button>
        </div>
      </div>
      <div style={paragraphContainerStyle}>
        <p style={paragraphStyle}>
          This is a paragraph of text placed in the container below the buttons.
          This is a paragraph of text placed in the container below the buttons
          This is a paragraph of text placed in the container below the buttons
          This is a paragthe container below the buttons
          This is a paragraph of text placed in the container below the buttons
          This is a paragraph of text placed in the container below the buttons
          This is a paragraph of text placed in 
        </p>
      </div>
    </div>
  );
};

export default Supplier_Dash;
