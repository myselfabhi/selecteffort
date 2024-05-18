import React from "react";
import Link from "next/link";
import StudyMaterial from "../login/StudyMaterial";
// import backgroundImage from "./landingPage/7.jpg";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo */}
        {/* <img src="./7.jpg" alt="Notingh" className="" /> */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold text-black hover:text-green-600 ">
            Effort Education
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {/* Modified: Wrapped the Study Material link with a Link component */}
            <li className="justify-center">
              <Link href="/components/login" legacyBehavior>
                <a className="text-black hover:text-green-600 ">
                  Study Material
                </a>
              </Link>
            </li>
            <li>
              <Link href="/components/About" legacyBehavior>
                <a className="text-black hover:text-green-600">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/components/contact" legacyBehavior>
                <a className="text-black hover:text-green-600">Contact</a>
              </Link>
            </li>
            <li>
            <button className="bg-green-600 hover:bg-red-700 text-white  py-2 px-4 rounded">
  Login-->
</button>
            </li>
          </ul>
        </nav>


        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <button className="text-white hover:text-blue-200 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
