import React, { useState } from 'react';
import TiffinOrderForm from '../customer/TiffinOrderForm';
import TiffinService from '../../../service/TiffinService';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';

function AddTiffin() {
  const [tiffin, setTiffin] = useState(
    {
      id : "",
      name : "",
      description :"",
      price : "",
      breakLunchDinner : 7,
      foodType : "",
      availableFrom : "",
      availableTo : "",
      vendorId : ""
    }
  ) ;
  const [tiffinName, setTiffinName] = useState('');
  const [tiffinDescription, setTiffinDescription] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState([]);
  const [foodType, setFoodType] = useState('vegetarian');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableTo, setAvailableTo] = useState('');
  const navigate = useNavigate() ;

  const changeHandler = (e) => {
    console.log(e.target.name) ;
    setTiffin((tiffin) => ({
        ...tiffin, // properties that are not changed            
        [e.target.name]: e.target.value // update value of change properties
    }));
}

  // const handleAvailabilityChange = (value) => {
  //   if (tiffin.availability.includes(value)) {
  //     setTiffin(...tiffin, availability.filter(item => item !== value));
  //   } else {
  //     setAvailability([...availability, value]);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ven = JSON.parse(sessionStorage.getItem("vendor")) ;
    if(ven !== null){
      console.log(ven.id) ;
      tiffin.vendorId = ven.id ;
      console.log(tiffin) ;
      TiffinService.createTiffin(tiffin, ven.jwt)
        .then((res) =>{
          console.log(res.data)
          swal("Tiffin Created Successfully!","","success") ;
        }
        ).catch((err)=>{
          swal("Error Creating tiffin","","error") ;
        }
        )  
    }else{
      swal("Login to create tiffin","","error") ;
      navigate("/sign-in") ;
    } 
      
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tiffin Name:</label>
        <input type="text" name="name" value={tiffin.name} onChange={changeHandler} />
      </div>
      <div>
        <label>Tiffin Description:</label>
        <textarea name="description" value={tiffin.description} onChange={changeHandler} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="price" value={tiffin.price} onChange={changeHandler} />
      </div>
      {/* <div>
        <label>Availability:</label>
        <label>
          <input
            type="checkbox"
            name="availability"
            value="breakfast"
            checked={tiffin.availability.includes('breakfast')}
            onChange={changeHandler}
          />
          Breakfast
        </label>
        <label>
          <input
            type="checkbox"
            name="availability"
            value="lunch"
            checked={availability.includes('lunch')}
            onChange={changeHandler}
          />
          Lunch
        </label>
        <label>
          <input
            type="checkbox"
            name="availability"
            value="dinner"
            checked={availability.includes('dinner')}
            onChange={changeHandler}
          />
          Dinner
        </label>
      </div> */}
      <div>
        <label>Food Type:</label>
        <select name="foodType"  onChange={changeHandler}>
          <option key="vegetarian">VEGETERIAN</option>
          <option key="non-vegetarian">NON-VEGETERIAN</option>
        </select>
      </div>
      <div>
        <label>Available From:</label>
        <input type="date" name="availableFrom" value={tiffin.availableFrom} onChange={changeHandler} />
      </div>
      <div>
        <label>Available To:</label>
        <input type="date" name="availableTo" value={tiffin.availableTo} onChange={changeHandler} />
      </div>
      <button type="submit">Add Tiffin</button>
    </form>
  );
}

export default AddTiffin;
