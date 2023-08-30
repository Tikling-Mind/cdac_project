import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import image4 from "./images/4.webp";
import image5 from "./images/5.webp";
import "../../index.css";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel interval={1500} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Slider;
