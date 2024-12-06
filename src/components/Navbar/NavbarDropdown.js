import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const NavbarDropdown = ({ dropdown, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "absolute top-0 left-0 mt-2" : "md:relative mt-4"
      } bg-[#2E4168] text-white rounded-lg shadow-lg p-2 md:px-8 w-full md:w-max z-50`}
    >
      <div className="grid grid-cols-1 md:flex md:gap-6">
        {dropdown.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Section Title */}
            {section.title && (
              <h3 className="hover:text-red-400 text-white text-lg font-semibold mb-2 whitespace-nowrap flex items-center gap-2">
                <ArrowRightRoundedIcon
                  size={16}
                  className="hover:text-red-400 font-extrabold transition-transform duration-300"
                />
                {section.title}
              </h3>
            )}

            {/* Section Items */}
            {section.items && (
              <ul className="flex flex-col gap-2">
                {section.items.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:bg-[#244b9a] hover:translate-x-2 duration-300 rounded-lg flex items-center gap-2 p-2"
                  >
                    <ArrowRightRoundedIcon
                      size={12}
                      className="font-extrabold transition-transform duration-300"
                    />
                    {/* Updated Item Name */}
                    {typeof item === "object" && item.name && item.link ? (
                      <Link
                        to={item.link}
                        className="hover:text-white text-sm font-medium transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      // Render as text if item is not an object
                      <span className="hover:text-white text-sm font-medium">
                        {item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Section Image */}
            {section.image && (
              <div className="mt-4 flex justify-center items-center">
                <img
                  src={section.image}
                  alt="Dropdown Preview"
                  className="rounded-lg shadow-lg w-full md:w-[290px] h-auto md:h-[300px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;
