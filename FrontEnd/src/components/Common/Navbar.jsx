import { IoSearchOutline } from "react-icons/io5";
import { FaKeybase } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800">
      <div className="w-[95%] mx-auto p-2 flex items-center justify-between">
        <a
          href=""
          className="font-semibold text-3xl flex items-center text-yellow-300"
        >
          <span className="me-2 ">
            <FaKeybase />
          </span>
          <span> SafeKey</span>
        </a>
        <div className="mx-auto hidden md:block">
          <form action="" method="post">
            <div className="p-2 bg-zinc-900 w-[600px] rounded-full  position-relative  flex items-center px-2 ">
              <span className="text-xl text-white">
                {" "}
                <IoSearchOutline />
              </span>

              <input
                type="text"
                className="bg-transparent outline-none  px-2 text-zinc-300 text-md font-medium w-full focus:border-blue-400"
                placeholder="Search passwords"
              />
            </div>
          </form>
        </div>
        <span className="text-2xl text-zinc-100">
          <FaRegQuestionCircle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
