import React from "react";
import BannerImg from "../../assets/banner.jpeg";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">About Us</p>
                  <h1 className="text-2xl sm:text-4xl font-bold"> Our Story</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Founded by [Founder's Name] in [Year], [Barbershop Name] blends
                precision with style to create memorable grooming experiences.
                Our commitment to excellence has made us a cornerstone of the
                community, where every visit is an opportunity to elevate
                confidence and individuality.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
