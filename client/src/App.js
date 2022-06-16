import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 
"react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";
import Footer from "./Footer";
import Geolocation from "./Geolocation";
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar";
import axios from "axios";
import Address from "./Address";
import Preloader from "./Preloader";
import { axiosInstance } from "./Config";

const promise = loadStripe(
  'pk_test_51KrilsFqPsnFWplWd1fkqOAqNkVukDSOSKxjeA3ygjAtWOPGPLAf8QCLo6qFRyoRmN0nspvJK5ZdZ0677oM7ZGLo00a9R1aVs4'
);
function App() {
  
const [{}, dispatch] = useStateValue();
const [data, setData] = useState()
  const [isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3700);
  });
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

  console.log("use me", data);


    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
      setisOpen(!isOpen);
    };
  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Header toggle={toggle} />

              <Orders data={data} />
            </Route>
            <Route path="/address">
              <Address />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
            <Route path="/payment">
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Header toggle={toggle} />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/checkout">
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Header toggle={toggle} />
              <Checkout data={data} />
            </Route>
            <Route path="/">
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Header toggle={toggle} />
              <SearchBar />
              <Geolocation />
              <Home />

              <Footer />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
