import React from "react";

const AboutUs = () => {
  return (
    
    <div>
      <div
        data-aos="fade-up"
        className="flex justify-center"
        style={{
          background:
            "radial-gradient(circle, #ef1818 40%, #8e404f 100%",
          height: "150px",
        }}
      >
        <h1 className="text-5xl sm:text-5xl text-white uppercase pt-12">
          About Us
        </h1>
      </div>
      <div className="max-w-[1320px] mx-auto py-5 flex justify-center items-center">
      
      <div data-aos="zoom-in"  className="basis-[45%]">
        <img src="/about_us.webp" alt="about_us" className="w-full" />
      </div>
      <div className="basis-[55%] pl-6">
        <h2 data-aos="fade-up"  className="text-4xl font-semibold">Welcome to <span className="text-red-600">Shopsy</span></h2>
        <p data-aos="fade-up" >
          At <span className="font-bold text-2xl text-red-600">Shopsy</span>, we believe that fashion is more than
          just clothes—it's a form of self-expression, a reflection of your
          personality, and a way to make a statement without saying a word. Our
          mission is to bring you a curated collection of clothing that not only
          makes you look good but feel good too.
        </p>
        <h2 data-aos="fade-up"  className="text-2xl font-semibold mt-3">Our Story</h2>
        <p data-aos="fade-up" >Founded in <span className="font-semibold">2014</span>, <span className=" font-bold text-red-600">Shopsy</span> was born out of a passion for quality, style, and sustainability. We started with a simple idea: to create clothing that speaks to the modern, conscious consumer. Whether you're dressing up for a special occasion or keeping it casual, we've got you covered with pieces that are both timeless and trendsetting.</p>

        <h2 data-aos="fade-up"  className="text-2xl font-semibold mt-3">What We Stand For</h2>
        <ul data-aos="fade-up">
            <li className="mb-3">
                <h3  className="font-semibold">Quality : </h3>
                <p>We are committed to using only the finest materials and craftsmanship in every piece we create. Our clothing is made to last, offering you durability without compromising on style.</p>
            </li>
            <li className="mb-3">
                <h3  className="font-semibold">Sustainability : </h3>
                <p>We are committed to using only the finest materials and craftsmanship in every piece we create. Our clothing is made to last, offering you durability without compromising on style.</p>
            </li>
            <li className="mb-3">
                <h3  className="font-semibold">Inclusivity : </h3>
                <p>We are committed to using only the finest materials and craftsmanship in every piece we create. Our clothing is made to last, offering you durability without compromising on style.</p>
            </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
