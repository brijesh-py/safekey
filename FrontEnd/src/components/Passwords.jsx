import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context";
import auth from "../auth";
import { IoMdArrowDropright } from "react-icons/io";
import { BsGlobeAmericas } from "react-icons/bs";

const Password = ({ password }) => {
  return (
    <Link
      to={`/passwords/${password.site_url}`}
      className="flex justify-between items-center px-3 cursor-pointer hover:bg-zinc-700 bg-zinc-800 text-zinc-200"
    >
      <span className="text-xl">
        <BsGlobeAmericas />
      </span>
      <div className="border-b border-zinc-600 w-[90%] p-3 text-sm">
        <span>{password.site_url}</span>
      </div>
      <span className="text-2xl">
        <IoMdArrowDropright />
      </span>
    </Link>
  );
};

const Passwords = () => {
  const [passwords, setPasswords] = useState([]);
  const { toggleNewMod, setToggleNewMod } = useContext(UserContext);

  const getPasswords = async () => {
    setPasswords([]);
    const response = await auth.getPasswords();
    response.success && setPasswords([...response.passwords]);
  };

  useEffect(() => {
    getPasswords();
  }, [toggleNewMod]);

  return (
    <div className=" sm:p-5 text-zinc-50">
      <div>
        <div className="flex items-center justify-between">
          <h3 className=" text-2xl mb-2">Passwords</h3>
          <button
            className="rounded-full border py-1 px-4 border-blue-300 hover:bg-zinc-700"
            onClick={() => setToggleNewMod(true)}
          >
            Add
          </button>
        </div>
        <span className="text-sm text-zinc-300">
          Create, save, and manage your passwords so you can easily sign in to
          sites and apps. ‎Learn more
        </span>
      </div>
      <div className=" rounded-xl  mt-5 h-[65vh] overflow-scroll max-h-full">
        {passwords?.map((password, index) => (
          <Password password={password} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Passwords;
