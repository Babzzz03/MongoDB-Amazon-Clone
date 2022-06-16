import React, { useEffect } from 'react'
import "./Slider.css"
import { useState } from 'react'
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { sliderData } from "./Slider-data";
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLenght = sliderData.length;



    const autoScroll = true;
    let slideInterval ;
    let intervalTime = 6500


    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLenght -1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide,intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

     useEffect(() => {
       if (autoScroll) {
           auto();
       }
       return () => clearInterval(slideInterval)
     }, [ currentSlide ]);

  return (
    <div className="slider">
      <KeyboardArrowLeftSharpIcon className="arrow prev" onClick={prevSlide} />

      <KeyboardArrowRightSharpIcon className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img  src={slide.image} alt="" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider