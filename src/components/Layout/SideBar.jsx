/* eslint-disable react/prop-types */
import { FaHome, FaUser } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { BsStack, BsWindowStack } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed flex items-center justify-center left-4 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4">
      <nav className="flex flex-col items-center justify-center w-full">
        <ul className="flex flex-col items-center justify-center gap-3">
          <SidebarItem icon={<FaHome />} text="Hero" link="/" />
          <SidebarItem icon={<FaUser />} text="About" link="/about" />
          <SidebarItem icon={<BsStack />} text="Skills" link="/skills" />
          <SidebarItem icon={<BsWindowStack />} text="Projects" link="/projects" />
          <SidebarItem icon={<BiComment />} text="Testimonials" link="/testimonials" />
          <SidebarItem icon={<MdAlternateEmail />} text="Contact" link="/contact" />
          <SidebarItem icon={<TbError404 />} text="404" link="/404" />
        </ul>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, link }) {
  return (
    <li className="relative group">
      <Link
        to={link}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white bg-opacity-30 backdrop-blur-lg border shadow-md transition-all hover:bg-indigo-500 hover:text-white"
      >
        <div className="text-2xl dark:text-white">{icon}</div>
      </Link>
      {/* Tooltip */}
      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 transition-opacity group-hover:opacity-100">
        {text}
      </div>
    </li>
  );
}
