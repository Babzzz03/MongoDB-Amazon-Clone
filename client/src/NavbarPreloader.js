import React from "react";
import "./NavbarPreloader.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle, TailSpin } from "react-loader-spinner";
function NavbarPreloader() {

    const FeedSkeleton = () => (
        <div className="load__skl">

        </div>
    )
  return <FeedSkeleton />;
}

export default NavbarPreloader;
