import React from "react";
import "./Preloader.css";

import { BallTriangle } from "react-loader-spinner";
function Preloader() {
  return (
    <div className="preloader">
      <BallTriangle color="#00BFFF" height={100} width={100} timeout={4000} />
    </div>
  );
}

export default Preloader;
