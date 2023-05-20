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
    padding: '20px', // Increased padding for vertical spacing
    margin: '10px', // Increased margin for vertical spacing
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
          <h2>What is the Collect Requst ?</h2>

            A collect request is a convenient service provided by our website that allows customers to easily dispose of their reusable and recyclable goods.When a customer has items they no longer need but can be reused or recycled, they can create a collect request through our platform. 
          By providing their name, address, phone number, and location, they can schedule a pickup for their goods.Once the collect request is submitted, our dedicated team will be notified and make arrangements to collect the items from the customer's specified location.
          This service helps customers responsibly and conveniently dispose of their goods while ensuring they are properly recycled or reused. Our goal is to make the process hassle-free and contribute to a sustainable environment.By utilizing our collect request service, customers can easily contribute to the recycling and reuse efforts, knowing that their items will be handled responsibly by our dedicated team.

          <h2>About Points</h2>

            Our system rewards customers for participating in recycling efforts.When customers contribute items, they earn points that can be used to purchase products on our e-commerce site. By recycling with us, customers can both help the environment and enjoy the benefits of their actions. 
          Accumulated points can be redeemed for a variety of products, creating a cycle of sustainability. This innovative point system encourages more individuals to actively participate in recycling, making a positive impact on our planet. Together, we can build a greener future while rewarding customers for their eco-conscious choices.
        </p>
      </div>
    </div>
  );
};

export default Supplier_Dash;
