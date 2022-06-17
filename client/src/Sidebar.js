import axios from 'axios';
import React,  { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosInstance } from './Config';
import cancel from "./images/cancel.png";
import "./Sidebar.css"

function Sidebar({isOpen, toggle}) {
  const history = useHistory()
  useEffect (()=>{
    fetchData()
  },[])
  const [data, setData] = useState();

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
    const handleAutentication = () => {
      localStorage.clear();

      setData(null);
      history.push("/");
    };
   
  return (
    <aside
      isOpen={isOpen}
      onClick={toggle}
      className={isOpen ? "sidebar__container active" : "sidebar__container"}
    >
      <div className="icon" onClick={toggle}>
        <div className="close__icon">
          <img className="fa-times" src={cancel} alt="" />
        </div>
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <Link to="/" className="sidebar__links" onClick={toggle}>
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </Link>
          <Link to="/orders" className="sidebar__links" onClick={toggle}>
            Returns & orders
          </Link>
          <Link to="/checkout" className="sidebar__links" onClick={toggle}>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Carts
          </Link>
          <Link
            to="/create-account"
            className={data ? "block " : "sidebar__links"}
            onClick={toggle}
          >
            Sign Up
          </Link>
        </ul>
        <div className="sidebtn__wrap">
          <Link
            to={!data && "/login"}
            className="sidebar__route"
            onClick={handleAutentication}
          >
            {data ? "Sign Out" : "Sign In"}
          </Link>
        </div>

        <div className="social__icon">
          <a
            className="social__icon__link"
            href="https://wa.me/message/43KEVC47D6HVM1"
            target="_blank"
            aria-label="whatsapp"
            rel="noreferrer"
          >
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a
            className="social__icon__link"
            href="http://"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            className="social__icon__link"
            href="https://twitter.com/Babzzz110?t=SXTsW1t33ozVu9q11jJkrg&s=09"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            className="social__icon__link"
            href="https://www.facebook.com/ola.babs.7121"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar