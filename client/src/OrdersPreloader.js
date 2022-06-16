import React from "react";
import "./OrdersPreloader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle, ThreeDots } from "react-loader-spinner";
function OrdersPreloader() {
  return (
    <div className="orders__preloader">
      <ThreeDots color="#febd69" height={100} width={100} timeout={3000} />
    </div>
  );
}

export default OrdersPreloader;
