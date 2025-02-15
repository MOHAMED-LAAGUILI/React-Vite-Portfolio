/* eslint-disable react/prop-types */
import { FaHome, FaUser } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { BsStack, BsWindowStack } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

export default function Sidebar() {
  return (
    <aside className="fixed flex items-center justify-center left-0 top-1/2 transform -translate-y-1/2 z-50 w-20 flex-col bg-white bg-opacity-30 backdrop-blur-lg border-r shadow-sm transition-all rounded-md border">
      <nav className="flex flex-col items-center justify-center w-full">
        {/* Sidebar Items */}
        <ul className="flex flex-col items-center justify-center gap-2">
          <SidebarItem icon={<FaHome />} text="Hero" link="#hero" />
          <SidebarItem icon={<FaUser />} text="About" link="#about" />
          <SidebarItem icon={<BsStack />} text="Skills" link="#skills" />
          <SidebarItem icon={<BsWindowStack />} text="Projects" link="#projects" />
          <SidebarItem icon={<BiComment />} text="Testimonials" link="#testimonials" />
          <SidebarItem icon={<MdAlternateEmail />} text="Contact" link="#contact" />
          <SidebarItem icon={<TbError404 />} text="404" link="*" />
        </ul>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, link, active }) {
  return (
    <li
      className={`relative flex items-center justify-center py-3 px-4 my-2 font-medium rounded-md cursor-pointer transition-all group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      <a href={link} className="flex items-center justify-center space-x-2 hover:text-black dark:text-white dark:hover:text-black">
        {/* Centering the icon with adjusted size and smooth transition */}
        <div className="flex justify-center items-center text-2xl">{icon}</div>

        {/* Centered text with transition and smooth reveal */}
        <span
          className={`overflow-hidden transition-all duration-200 ease-in-out whitespace-nowrap ${active ? "w-52 ml-3" : "w-0"}`}
        >
          {text}
        </span>
      </a>

      {/* Tooltip on hover with smooth appearance */}
      {!active && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
