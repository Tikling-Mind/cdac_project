import React, { useState } from 'react';

function AddTiffin() {
  const [tiffinName, setTiffinName] = useState('');
  const [tiffinDescription, setTiffinDescription] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState([]);
  const [foodType, setFoodType] = useState('vegetarian');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableTo, setAvailableTo] = useState('');

  const handleAvailabilityChange = (value) => {
    if (availability.includes(value)) {
      setAvailability(availability.filter(item => item !== value));
    } else {
      setAvailability([...availability, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tiffin Name:</label>
        <input type="text" value={tiffinName} onChange={(e) => setTiffinName(e.target.value)} />
      </div>
      <div>
        <label>Tiffin Description:</label>
        <textarea value={tiffinDescription} onChange={(e) => setTiffinDescription(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Availability:</label>
        <label>
          <input
            type="checkbox"
            value="breakfast"
            checked={availability.includes('breakfast')}
            onChange={() => handleAvailabilityChange('breakfast')}
          />
          Breakfast
        </label>
        <label>
          <input
            type="checkbox"
            value="lunch"
            checked={availability.includes('lunch')}
            onChange={() => handleAvailabilityChange('lunch')}
          />
          Lunch
        </label>
        <label>
          <input
            type="checkbox"
            value="dinner"
            checked={availability.includes('dinner')}
            onChange={() => handleAvailabilityChange('dinner')}
          />
          Dinner
        </label>
      </div>
      <div>
        <label>Food Type:</label>
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <div>
        <label>Available From:</label>
        <input type="date" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
      </div>
      <div>
        <label>Available To:</label>
        <input type="date" value={availableTo} onChange={(e) => setAvailableTo(e.target.value)} />
      </div>
      <button type="submit">Add Tiffin</button>
    </form>
  );
}

export default AddTiffin;
