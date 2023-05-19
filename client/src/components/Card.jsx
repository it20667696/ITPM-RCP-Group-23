import React from 'react';

const Card = () => {
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '500px',
    padding: '20px',
    margin: '60px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    

  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
  };

  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <h2>Card 1</h2>
        <p>This is some text for card 1kkkkkkklllllllllllllllllllllllllllllllllllllllll
            lllllllllllllllllllllllllllllllllllll
            lllllllllllllllllllllllllll
            lllllllllllllllllllllllllll
            lllllllllllllllllllllllllllllllll
            llllllllllll.</p>
        <button style={buttonStyle}>Button 1</button>
      </div>
      <div style={cardStyle}>
        <h2>Card 2</h2>
        <p>This is some text for card 2.</p>
        <button style={buttonStyle}>Button 2</button>
      </div>
    </div>
  );
};

export default Card;
