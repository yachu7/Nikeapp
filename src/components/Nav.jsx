import { headerLogo } from "../assets/images";
import { cross, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  // Use state to keep track of the icon
  const [isCross, setIsCross] = useState(false); // Use state to keep track of the icon

  const changeIcon = () => {
    // Use the state variable isCross to determine which icon to display
    setIsCross((prevIsCross) => !prevIsCross);
  };

  return (
    <header className="padding-x py-8  z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <div className="flex-1">

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} >
              <Link 
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition ease-out  delay-100">
                {" "}
                {item.label}{" "}
              </Link>
            </li>
          ))}
        </ul>
          </div>

        <div className="hidden max-lg:block cursor-pointer delay-100">
          <img
            src={isCross ? cross : hamburger} // Toggle between cross and hamburger based on state
            alt={isCross ? "cross" : "hamburger"} // Provide appropriate alt text
            width={25}
            height={25}
            onClick={changeIcon}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
