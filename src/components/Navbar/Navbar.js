import React, { useState, useRef } from "react";  // Added 'useRef' here
import { AiOutlineAppstore, AiOutlineShareAlt } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import NavList from "./NavList";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const hoverRef = useRef(false); // useRef keeps the state unchanged across renders
  
  const handleMouseEnter = (list) => {
    setActiveDropdown(list); // Show dropdown instantly
    hoverRef.current = true;  // Set hover state to true using the ref
  };
  
  const handleMouseLeave = () => {
    hoverRef.current = false;  // Set hover state to false when mouse leaves
    
    setTimeout(() => {
      if (!hoverRef.current) {  // Check if it's no longer hovering using the ref
        setActiveDropdown(false); // Close dropdown after delay
      }
    }, 300); // 300ms delay
  };
  return (
    <div className="p-8 bg-gray-100">
      <div className="rounded-full px-6 py-8 bg-white shadow-md flex items-center justify-between">
        {/* Left Icons */}
        <div className="flex gap-16 mx-auto ml-6">
          <AiOutlineAppstore size={50} className="text-black hover:fill-black" />
          <AiOutlineShareAlt size={50} className="text-black hover:fill-black rotate-90" />
        </div>

        {/* Navigation List */}
        <div className="flex-1 ml-48 relative">
          <ul className="flex gap-10 items-center font-medium text-xl text-center">
            {NavList.map((item, index) => (
              <NavbarItem
                key={item.id}
                list={item.list}
                onMouseEnter={() => handleMouseEnter(item.list)}
                onMouseLeave={handleMouseLeave}
                isActive={activeDropdown === item.list}
                isFirstItem={index === 0} // Pass isFirstItem for the first item
              >
                {item.dropdown && activeDropdown === item.list && (
                  <NavbarDropdown dropdown={item.dropdown} />
                )}
              </NavbarItem>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-16">
          <FaSearch size={30} className="text-gray-500" />
          <button className="px-12 py-6 text-2xl rounded-full border border-red-500 text-black font-semibold transition hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500 hover:text-white">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
