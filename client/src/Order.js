import React, { useState } from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  console.log(order)
 const [time, setTime] = useState(order.createdAt);
  return (
    <div className="order">
      <h2>Order</h2>
      <p className='time'>
        {time.slice(0, -14)} <span>at</span> {time.slice(0, -4).slice(11)}
      </p>
      <p className="order__id">
        <small>{order._id}</small>
      </p>
      <h3 className='order__address'>Shipping Address</h3>
      <p>{order.address.name}</p>
      <p>{order.address.country}</p>
      <p className='order__location' >{order.address.location}</p>

      {order.products?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order