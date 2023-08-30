import React from "react";
import Slider from "../../Carousal/slider";
import { useNavigate } from "react-router-dom";
import "../../../index.css";
import Footer from "../../footer/FooterComponent";
//import Header from "../../header/Header"
import Cards from "../../Card/VendorCards";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Slider />
      <div className="container">
      <div class="container">
        <br></br>
        <h1 align="center">About Us</h1>
        <section id="about-us">
          <p align="center">
          Welcome to TiffinWala.com, your go-to destination for delicious and convenient tiffin delivery services. We understand the importance of wholesome, home-cooked meals in today's fast-paced world, and that's why we're here to make your dining experience both convenient and delightful.        
          </p>
          <p align="center">
          At TiffinWala.com, our mission is simple: to deliver the taste of home right to your doorstep. We believe that food is not just about satisfying hunger, but also about nourishing the soul. Our dedicated team is passionate about providing you with meals that not only satiate your appetite but also remind you of the comforting flavors of home-cooked dishes.        
          </p>
          <section id="footer">
          <p align="center">
          Ordering your favorite tiffin is a simple. Simply browse our website and explore our menu. Choose from a variety of mouthwatering dishes and select the tiffin option that suits your taste. Once you've made your selections, proceed to the checkout, provide your delivery details, and make your payment securely online.
          </p>
          </section>
        </section>
    </div>
        {/* <h2 style={{ margin: "25px" }}>Vendors</h2>
        <Cards /> */}
      </div>
    </div>
  );
};

export default Home;
