import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavList from "./NavList";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "../../img/Gudmed1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (list) => {
    if (!isMobile) setActiveDropdown(list);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-4 py-4 sm:py-6 md:py-6 lg:px-12 flex items-center justify-between flex-wrap">

        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
  <Link to="/">
    <img
      src={Logo || "https://via.placeholder.com/150"} // Fallback image for debugging
      alt="logo"
      className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto md:mx-2 lg:mx-4"
    />
  </Link>
</div>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-end">
          <button className="text-3xl" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-4 lg:gap-6 items-center font-medium text-sm lg:text-base xl:text-lg">
            {NavList.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.list)}
                onMouseLeave={handleMouseLeave}
              >
                <NavbarItem
                  list={item.list}
                  link={item.link}
                  isActive={activeDropdown === item.list}
                />
                {item.dropdown && activeDropdown === item.list && (
                  <div className="absolute top-full left-0 z-20 bg-white shadow-lg rounded-md p-2">
                    <NavbarDropdown dropdown={item.dropdown} isMobile={isMobile} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch Button */}
        <div className="hidden md:flex items-center justify-end flex-shrink-0">
          <Link to="/contacts">
            <button className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 xl:px-8 xl:py-4 text-sm sm:text-base md:text-lg xl:text-xl font-semibold rounded-full border border-red-500 text-black transition hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500 hover:text-white md:mx-2 lg:mx-4">
              Get in touch
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <ul className="flex flex-col gap-4 text-sm sm:text-base">
            {NavList.map((item) => (
              <NavbarItem key={item.id} list={item.list} link={item.link}>
                {item.dropdown && (
                  <NavbarDropdown dropdown={item.dropdown} isMobile={isMobile} />
                )}
              </NavbarItem>
            ))}
          </ul>
          <Link to="/contacts">
            <button className="mt-6 w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-full border border-red-500 text-black transition hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500 hover:text-white">
              Get in touch
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
