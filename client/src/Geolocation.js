import React, { useState } from 'react';
import axios from "axios";
import "./Geolocation.css"
import { axiosInstance } from './Config';
const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `ecb11d9ad123c064b980ea5cdb0c608b`;


function Geolocation() {
    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('');
    const [responseData, setresponseData] = React.useState({})
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
setLatitude(position.coords.latitude);
setLongitude(position.coords.longitude);

        })
        let finalApiEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`

        axios.get(
          finalApiEndPoint)
          .then((response) => {
              console.log(responseData)
setresponseData(response.data);
          }
        );
         fetchData();
    }, [latitude, longitude])

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


  return (
    <div className="geolocation">
      <div className="geolocation__content">
        <div className="geolocation__address">
          {" "}
          We deliver to your Country{" "}
          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
          {responseData?.sys?.country}, in{" "}
          <span className="city"> {responseData?.name} </span>{" "}
        </div>
        <div className="name__div">
          {" "}
          {data ? `${data}'s Amazon.com` : "Amazon.com"}
        </div>
      </div>
    </div>
  );
}

export default Geolocation