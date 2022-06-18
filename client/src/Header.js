import React, { useState, useEffect } from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search"
import  {Link, useHistory} from "react-router-dom"
import { useStateValue } from "./StateProvider";

import axios from "axios";
import shoppingbasket from "./images/cart2.png";
import whitelogo from "./images/whitelogo.png";
import sidebar from "./images/sidebar.png";
import { axiosInstance } from "./Config";
import HorizontalSplitSharpIcon from "@mui/icons-material/HorizontalSplitSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function Header({ toggle }) {
  const [User, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
  const history = useHistory();
 
  useEffect(() => {
    fetchData();
  }, []);


   
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const fetchData = async () => {
         setLoading(true);
        try {
         
          axiosInstance
            .get("/v1/user", config)
            .then((response) => {
              setUser(response.data.username);
            })

            .catch((error) => {
              console.log(error);
            });
        } catch (e) {
          console.log(e);
        }
         setLoading(false);
      };




console.log(loading)

const [guest, setGuest] = useState("Guest");




  const handleAutentication = () => {
    localStorage.clear()
   
      
   

     
      setUser(null);
      history.push("/")
      
    
    
  };
  const [{ basket, user }, dispatch] = useStateValue();
 
  return (
    <div className="header">
      <div className="mobile__icon" onClick={toggle}>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <Link to="/">
        <img className="header__logo" src={whitelogo} alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="mobile__menu">
        <div className="header__nav">
          <Link to={!User && "/login"} className="link__style">
            <div
              onClick={handleAutentication}
              className="header__option visible"
            >
              <span className="header__optionLineOne user__name">
                <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
                Hello, {User ? User : guest}
              </span>
              <span className="header__optionLineTwo">
                {User ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to={User ? "/orders" : "/login"} className="link__style">
            <div className="header__option hidden">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/checkout" className="link__style">
            <div className="header__option hidden">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="link__style">
            <div className="header__optionBasket visible">
              <img src={shoppingbasket} alt="" srcset="" className="cart" />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
