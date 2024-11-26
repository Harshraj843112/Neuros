import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const NavbarDropdown = ({ dropdown }) => {
  return (
    <div className="absolute top-full left-0 mt-2 bg-black text-white rounded-lg shadow-lg p-6 w-max z-50">
      <div className="flex gap-6">
        {dropdown.map((section, index) => (
          <div key={index} className="flex flex-col flex-shrink-0">
            {section.title && (
              <h3 className="hover:text-red-400 text-white text-lg font-semibold mb-2 whitespace-nowrap flex items-center gap-2 hover:translate-x-7 duration-300">
                <ArrowRightRoundedIcon
                  size={12}
                  className="hover:text-red-400 font-extrabold transition-transform duration-300"
                />
                {section.title}
              </h3>
            )}
            {section.items && (
              <ul className="flex flex-col gap-2">
                {section.items.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:text-red-500 px-4 py-2 cursor-pointer hover:translate-x-7 duration-300"
                  >
                    <ArrowRightRoundedIcon
                      size={12}
                      className="hover:text-red-400 font-extrabold transition-transform duration-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.image && (
              <div className="mt-4 flex justify-center items-center">
                <img
                  src={section.image}
                  alt="Dropdown Preview"
                  className="rounded-lg shadow-lg w-[290px] h-[200px] object-cover"
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
