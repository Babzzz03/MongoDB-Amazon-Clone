import React,{ useEffect, useState}  from 'react';
import './Orders.css';

import Order from "./Order";
import axios from 'axios';
import "./CheckoutProduct.css";
import moment from 'moment';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Preloader from './Preloader';
import OrdersPreloader from './OrdersPreloader';
import { axiosInstance } from './Config';

function Orders() {
  
  const history = useHistory;
  const [orders, setOrders] = useState([]);
 
  console.log(orders);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 3000);
   }); 
  useEffect(() => {
    setTimeout(fetchData, 3000);
   

  
  }, []);

  const fetchData = async () => {
    try {
      axiosInstance
        .get("/v1/amazon/orders", config)
        .then((response) => {
          setOrders(response.data.cart);
        })

        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  console.log(orders);

  
  return (
    <div className="orders">
      <h1>Your Order</h1>
   {isLoading? <OrdersPreloader/>  : <div className="orders__order">
        {orders
          .slice(0)
          .reverse()
          ?.map((order) => (
            <Order order={order} />
          ))}
      </div>}
    </div>
  );
}

export default Orders