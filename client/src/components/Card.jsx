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
    textalign: 'center',
    


  };

  const buttonStyle = {
    padding: '10px 50px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    margin: '0 auto',
  };

  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <h2>Do you have Recyclables?</h2>
        <p>At [Company Name], we are proud to introduce our new initiative that rewards customers for their commitment to sustainability.
           Customers can now bring in their recyclable or reusable items to us and earn valuable points in return. 
           These points can be redeemed on our e-commerce site, allowing them to purchase a wide range of products while actively contributing to a greener planet.
           We believe that by incentivizing sustainable practices, we can create a positive impact on the environment while providing our customers with a rewarding shopping experience.
           Join us in this eco-friendly journey and be part of the change!</p>
       <div style={{ display: 'flex' }} >
        <button style={buttonStyle}>+ Join</button></div> 
      </div>
    
      <div style={cardStyle}>
        <h2>Want to sell a Product</h2>
        <p>This is some text for card 2.</p>
        <button style={buttonStyle}>+ Join</button>
      </div>
    </div>
  );
};

export default Card;