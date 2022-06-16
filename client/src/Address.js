import React, { useState } from 'react'
import "./Address.css"
import { useStateValue } from './StateProvider';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
const axios = require("axios");
const Address = () => {
 const history = useHistory();
const [location, setLocation] = useState("");
const [name, setName] = useState("");
const [country, setCountry] = useState("");

const [{  address }, dispatch] = useStateValue();




const addAddress = (e) => {
  e.preventDefault()
  dispatch({
    type: "ADD_ADDRESS",
    place: {
      location: location,
      name: name,
      country: country,
     
    },
  });
   history.push("./payment");
};

console.log(address)

  return (
    <div className="address__container">
      <div className="address">
        <div className="address__detail">
          <div className="image__wrapper">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/checkout-spc-address-banner._CB485941369_.gif"
              alt=""
              className="address__image"
            />
          </div>
          <div className="address__description">
            <h2>Select a shipping address</h2>
            <p>
              Please enter a shipping address for this order. Please also
              indicate whether your billing address is the same as the shipping
              address entered. When finished, click the "Continue" button. Or,
              if you're sending items to more than one address, click the "Add
              another address" button to enter additional addresses.
            </p>
          </div>
        </div>
        <div className="address__form">
          <div className="main__form">
            <div>
              <h1>Add a new address</h1>
              <h5>Username</h5>
              <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h5>Country</h5>
              <input
                type="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <h5>address</h5>
              <input
                type="address"
                name="address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <p>
                Delivery instructions (optional) <br /> Add preferences, notes,
                access codes and more
              </p>
              <button
                onClick={addAddress}
                type="submit"
                className="login__signInButton  address__button"
              >
                Use this address
              </button>
            </div>
            <div className="form__space"></div>
          </div>
          <div className="address__buttom"></div>
        </div>
        <div className="address__footer">
          <p>
            Conditions of Use | Privacy Notice © 1996-2022, Amazon clone.com,
            Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address