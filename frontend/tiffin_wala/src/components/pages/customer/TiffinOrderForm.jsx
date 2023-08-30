import React, { useState, useEffect } from 'react';

function TiffinOrderForm() {
  const [breakfastQuantity, setBreakfastQuantity] = useState(0);
  const [lunchQuantity, setLunchQuantity] = useState(0);
  const [dinnerQuantity, setDinnerQuantity] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('home');
  const [otherAddress, setOtherAddress] = useState('');
  const [tiffinName, setTiffinName] = useState('');
  const [tiffinDescription, setTiffinDescription] = useState('');
  const [tiffinPrice, setTiffinPrice] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const handleQuantityChange = () => {
    const total = parseInt(breakfastQuantity) + parseInt(lunchQuantity) + parseInt(dinnerQuantity);
    setTotalQuantity(total);
  };

  const calculateTotalPrice = () => {
    const singleTiffinPrice = parseFloat(tiffinPrice);
    setTotalPrice(singleTiffinPrice * totalQuantity);
  };

  useEffect(() => {
    // Fetch tiffin details from backend API here
    fetchTiffinDetails();
  }, []);

  const fetchTiffinDetails = async () => {
    try {
      const response = await fetch('/api/getTiffinDetails'); // Replace with your backend API endpoint
      const data = await response.json();
      setTiffinName(data.name);
      setTiffinDescription(data.description);
      setTiffinPrice(data.price);
    } catch (error) {
      console.error('Error fetching tiffin details:', error);
    }
  };

  useEffect(() => {
    handleQuantityChange();
    calculateTotalPrice();
  }, [breakfastQuantity, lunchQuantity, dinnerQuantity, totalQuantity, tiffinPrice]);

  return (
      <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h1 style={{ textAlign: 'center' }}>Tiffin Order </h1>
        <p><strong>Tiffin Name:</strong> {tiffinName}</p>
        <p><strong>Tiffin Description:</strong> {tiffinDescription}</p>
        <p><strong>Tiffin Price:</strong> ${tiffinPrice}</p>

      <form action="process_order.php" method="post">
        <label htmlFor="breakfastQuantity">Breakfast Quantity:</label>
        <input
          type="number"
          id="breakfastQuantity"
          name="breakfastQuantity"
          value={breakfastQuantity}
          onChange={(e) => setBreakfastQuantity(e.target.value)}
          min="0"
          required
        />
        
        <br /><br />

        <label htmlFor="lunchQuantity">Lunch Quantity:</label>
        <input
          type="number"
          id="lunchQuantity"
          name="lunchQuantity"
          value={lunchQuantity}
          onChange={(e) => setLunchQuantity(e.target.value)}
          min="0"
          required
        />
        <br /><br />

        <label htmlFor="dinnerQuantity">Dinner Quantity:</label>
        <input
          type="number"
          id="dinnerQuantity"
          name="dinnerQuantity"
          value={dinnerQuantity}
          onChange={(e) => setDinnerQuantity(e.target.value)}
          min="0"
          required
        />
        <br /><br />

        <label htmlFor="startDate">Order Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="endDate">Order End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <br /><br />

        <label>Delivery Address:</label><br />
        <input
          type="radio"
          id="homeAddress"
          name="deliveryAddress"
          value="home"
          checked={deliveryAddress === 'home'}
          onChange={handleAddressChange}
        />
        <label htmlFor="homeAddress">Home Address</label><br />

        <input
          type="radio"
          id="otherAddress"
          name="deliveryAddress"
          value="other"
          checked={deliveryAddress === 'other'}
          onChange={handleAddressChange}
        />
        <label htmlFor="otherAddress">Other Address</label><br /><br />

        {deliveryAddress === 'other' && (
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={otherAddress}
              onChange={(e) => setOtherAddress(e.target.value)}
              rows="4"
              cols="50"
            />
            <br /><br />
          </div>
        )}

    



        
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
        <p><input type="submit" value="Place Order" /></p> 
      </form>
      <br /><br />
      
    </div>
  );
}

export default TiffinOrderForm;


        

        