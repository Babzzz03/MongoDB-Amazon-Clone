
import React, { useEffect, useState} from 'react'
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { axiosInstance } from './Config';



function Payment() {
    const [{ basket, user, address }, dispatch] = useStateValue();
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();
const [succeeded, setsucceeded] = useState(false);
const [processing, setprocessing] = useState("");
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [users, setUser] = useState("");

useEffect(()=>{
   fetchData();
}, [])
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
        setUser(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};
console.log(address?.name);



    useEffect(() => {

      const getClientSecret = async () => {
const response = await axios({ 
  method: "post",
  url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
});
setClientSecret(response.data.clientSecret)

      }
      getClientSecret()
     
    }, [basket])


console.log('The secret is', clientSecret)
console.log('This is the', user);
console.log("This is the", basket);









    const handleSubmit = async (e) => {
e.preventDefault();
setprocessing(true);



const payload = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement)
  }
}).then(({ paymentIntent }) => {
  //THIS IS WHERE WE USE THER AXIOS POST REQUEST ON THE SERVER
  /*
const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

 async function register(e) {
 

   axios.post(`/api/v1/amazon`, {
     basket,
     amount: paymentIntent.amount,
     created: paymentIntent.created,
   }, config);
     
 }
register()







db
.collection('users')
.doc(user?.uid)
.collection('orders')
.doc(paymentIntent.id)
.set({
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created
})*/
const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};



  axiosInstance.post(
    `/v1/amazon/products`,
    {
      address:address,
      products: basket,
      price: getBasketTotal(basket)
      
    },
    config
  );




  setsucceeded(true);
  setError(null);
  setprocessing(false);


  


  history.replace("/orders");

 dispatch({
   type: "EMPTY_BASKET",
 });

})
}

   
 const handleChange = (event) => {
   setDisabled(event.empty);
   setError(event.error ? event.error.message : "");
 };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>

            <p>
              <span>To:</span> {address?.name}
            </p>
            <p>
              <span>At:</span> {address?.location}
            </p>
            <p>
              <span>In:</span> {address?.country}
            </p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__item">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
            }


export default Payment