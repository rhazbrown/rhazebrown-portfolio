import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#09111c]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-pink-600">
          Rhazeb Brown
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-teal-300">
          I'm a Front-End Web Developer.
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          I’m a Front-End Developer with proficient 1year+ React expertise and
          entire development life cycle. Increased speed of product lifecycle
          and 100% of the time delivered fully responsive projects within
          deadline, great at conducting debugging and manual testing for better
          company-client relationship.
        </p>
        <Link to="work" smooth={true} duration={500}>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
