import React, { useEffect, useState } from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import promo from "./images/promo 2.jfif";
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { axiosInstance } from './Config';

function Checkout() {
 const [data, setData] = useState("");
 useEffect(() => {
   fetchData();
 });

 const config = {
   headers: {
     Authorization: "Bearer " + localStorage.getItem("token"),
   },
 };

 const fetchData = async () => {
   try {
     axiosInstance
       .get("/v1/user", config)
       .then((response) => {
         setData(response.data.username);
       })

       .catch((error) => {
         console.log(error);
       });
   } catch (e) {
     console.log(e);
   }
 };
  const [{ basket, user }, dispatch] = useStateValue();
   console.log(data);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={promo} alt="" />
        <div>
          <h3>Hello, {data}</h3>
          <h2 className="checkout__title">Yours Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>

      <div className="checkout__right">
        <Link to={!data && "/login"} className="checkout__link">
          <Subtotal />
        </Link>
      </div>
    </div>
  );
  }

export default Checkout