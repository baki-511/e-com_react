import React from "react";

// import Hero from "../components/Hero/Hero";
import Hero from "../../components/Hero/Hero"
import Products from "../../components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducts from "../../components/TopProducts/TopProducts";
import Banner from "../../components/Banner/Banner";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonial/Testimonials";


const HomeLayout = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  
    React.useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      Aos.refresh();
    }, []);
  
  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
    </div>
  )
}

export default HomeLayout