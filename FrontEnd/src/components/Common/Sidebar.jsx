import { IoMdKey } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed w-64 h-screen transition-transform -translate-x-full md:translate-x-0 ">
      <ul className="mt-5 font-medium">
        <li>
          <NavLink
            to={"/passwords"}
            className={({ isActive, isPending }) =>
              ` text-white text-xl p-2  rounded-e-full text-center  flex items-center px-8 space-x-4 ${
                isActive ? "bg-blue-400" : "hover:bg-zinc-700"
              }`
            }
          >
            <span className="text-2xl">
              <IoMdKey />
            </span>
            <span>Passwords</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/settings"}
            className={({ isActive, isPending }) =>
              ` text-white text-xl p-2  rounded-e-full text-center  flex items-center px-8 space-x-4 ${
                isActive ? "bg-blue-400" : "hover:bg-zinc-700"
              }`
            }
          >
            <span className="text-xl">
              <IoMdSettings />
            </span>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
