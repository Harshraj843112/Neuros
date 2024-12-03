import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavList from "./NavList";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "../../img/Gudmed1.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen size is mobile

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update the isMobile state on window resize
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse enter for desktop dropdown
  const handleMouseEnter = (list) => {
    setActiveDropdown(list);
  };

  // Handle mouse leave for desktop dropdown
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-4 py-6 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-12 sm:h-16 w-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl"
            onClick={toggleMobileMenu} // Toggle mobile menu on click
          >
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
       {/* Desktop Navigation */}
       <div className="hidden md:flex flex-1 justify-center">
  <ul className="flex gap-6 md:gap-4 items-center font-medium text-lg">
    {NavList.map((item) => (
      <li
        key={item.id}
        className="relative"
        onMouseEnter={() => handleMouseEnter(item.list)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navbar Item */}
        <NavbarItem
          list={item.list}
          link={item.link}
          isActive={activeDropdown === item.list}
        />

        {/* Dropdown */}
        {item.dropdown && activeDropdown === item.list && (
          <div className="absolute top-full left-0 z-20 bg-white  rounded-md p-2">
            <NavbarDropdown dropdown={item.dropdown} isMobile={isMobile} />
          </div>
        )}
      </li>
    ))}
  </ul>
</div>


        <button className="px-8 hidden md:block py-6 text-2xl rounded-full border border-red-500 text-black font-semibold transition hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500 hover:text-white">



            Get in touch

          </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6">
          <ul className="flex flex-col gap-4 text-lg">
            {NavList.map((item) => (
              <NavbarItem
                key={item.id}
                list={item.list}
                link={item.link}
              >
                {item.dropdown && (
                  <NavbarDropdown
                    dropdown={item.dropdown}
                    isMobile={isMobile} // Pass isMobile prop
                  />
                )}
              </NavbarItem>
            ))}
          </ul>

          {/* Get in Touch Button */}
          <button className="mt-6 px-4 py-3 text-lg w-full rounded-full border border-red-500 text-black font-semibold transition hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500 hover:text-white">
            Get in touch
          </button>
        </div>
      )}

      {/* Get in Touch Button for Desktop */}
      
    </div>
  );
};

export default Navbar;
