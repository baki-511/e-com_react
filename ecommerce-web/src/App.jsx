import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Contact_us from "./components/ContactUs/Contact_us";
import AboutUs from "./components/AboutUs/AboutUs";
// import Layout from "./components/Layout/Layout";
import HomeLayout from "./components/Layout/HomeLayout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import { Provider } from "react-redux";
import { store } from "./components/ShoppingCart/store/Index";
import Home from "./components/ShoppingCart/pages/Home";
import Detail from "./components/ShoppingCart/pages/Detail";
import Layout from "./components/ShoppingCart/components/Layout";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const { pathname } = useLocation();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider store={store}>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/products" element={<Layout />}>
            <Route path="/products" element={<Home />} />
            <Route path="/products/:slug" element={<Detail />} />
          </Route>
          <Route path="/myProducts" element={<ProductsPage />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Provider>
  );
};

export default App;
