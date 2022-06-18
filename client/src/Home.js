import React from 'react'
import "./Home.css"
import Product from './Product';
import watch from "./images/watch.png";
import laptop from "./images/laptop.png";
import shoe from "./images/nike-shoe.png";
import Telivision from "./images/Telivision.png";
import mouse from "./images/mouse.png";
import headset1 from "./images/Headset.png";
import Slider from "./Slider"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Slider />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="Men Automatic Watch Self Winding Tourbillon Mechanical Business Luxury 5ATM Waterproof Luminous Sapphire Crystal Date Watch for Men"
            price={78}
            image="https://m.media-amazon.com/images/I/81LfGDf0AhL._AC_UL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround Sound PS4 Headset 50mm Drivers, 3.5mm Audio Jack Over Ear Headphones Wired for PC Switch Playstation Xbox PS5 Laptop"
            price={81}
            image={headset1}
            rating={4}
          />
        </div>
        <div className="home__row ">
          <Product
            id="3"
            title="TIAMOU Running Shoes Women Walking Athletic Tennis Non Slip Blade Type Fashion Sneakers"
            price={45}
            image={shoe}
            rating={6}
          />
          <Product
            id="4"
            title="ProCase MacBook Pro 13 Inch Case 2020 M1 A2338/ A2289/ A2251, Heavy Duty Slim Hard Shell Dual Layer Protective Cover with Fold Kickstand for MacBook Pro New..."
            price={70}
            image={laptop}
            rating={4}
          />
          <Product
            id="5"
            title="seenda Wireless Mouse, 2.4G Noiseless Mouse with USB Receiver - Portable Computer Mice for PC, Tablet, Laptop with Windows System - Mint Green"
            price={39}
            image={mouse}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Infinix Note 11 Pro (X697) '6.95 FHD+ 120Hz, 8GB RAM + 128GB ROM'"
            price={79}
            image={Telivision}
            rating={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home