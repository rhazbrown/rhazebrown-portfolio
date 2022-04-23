import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" left-9px fixed w-full h-[80px]  flex justify-between items-center px-4 bg-[#09111c] text-gray-300 ">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex mr-56  ">
        <li>
          <Link
            to="home"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="about"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="work"
            className="hover:text-pink-600"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            className="hover:text-pink-600"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/rhazbrown"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14b8a6]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/rhazeb-brown-4b78a14a/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db2777]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:rhazbrown@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://res.cloudinary.com/wprodigy/raw/upload/v1650550169/Assets/Rhazeb_Brown_CV_s4tqrz.docx"
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
