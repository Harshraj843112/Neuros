import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is being used
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const NavbarItem = ({
  list,
  link, // Add 'link' prop
  onMouseEnter,
  onMouseLeave,
  isActive,
  children,
  isFirstItem, // Prop to check if it's the first item
}) => (
  <li
    className={`relative flex items-center gap-2 text-black cursor-pointer ${
      isFirstItem
        ? "bg-[#2E4168] text-white px-5 py-3 rounded-full" // Styles for the first item
        : isActive
        ? "bg-slate-100 text-black px-5 py-3 rounded-full" // Active item styles
        : "hover:text-gray-700 px-5 py-2 rounded-full hover:bg-slate-200" // Hover effect for other items
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Wrap List Text in Link */}
    <Link to={link} className="flex items-center gap-2">
      <span>{list}</span>

      {/* Always Show Arrow Icon, white icon for the first item */}
      <ArrowRightRoundedIcon
        size={12}
        className={`rotate-45 font-extrabold mt-2 ml-2 ${
          isFirstItem ? "text-white" : "text-black" // White icon for the first item
        }`}
      />
    </Link>

    {/* Render Children */}
    {children}
  </li>
);

export default NavbarItem;
