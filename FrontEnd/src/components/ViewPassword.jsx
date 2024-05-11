import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../context";
import auth from "../auth";
import Input from "./Input";
import { FaArrowLeft } from "react-icons/fa6";
import { BsGlobeAmericas } from "react-icons/bs";

const ViewPassword = () => {
  const navigate = useNavigate();
  const { setToggleEditMod, setHoldPassword } = useContext(UserContext);
  const [hold, setHold] = useState({});
  const { site_url } = useParams("site_url");

  const loadPassword = async () => {
    const response = await auth.getPassword(site_url);
    response.success && setHold(response.password);
  };

  const deleteHandler = async () => {
    const response = await auth.deletePassword(site_url);
    response.success && navigate("/passwords");
  };

  useEffect(() => {
    loadPassword();
  }, [site_url]);
  return !hold ? null : (
    <div className="my-3">
      <div className="flex items-center space-x-3 text-zinc-300 text-md">
        <Link to={"/passwords"} className="cursor-pointer p-2 rounded-full hover:bg-zinc-700 flex items-center justify-center">
          <span>
            <FaArrowLeft />
          </span>
        </Link>
        <span>
          <BsGlobeAmericas />
        </span>
        <span className="text-lg">{hold.site_url}</span>
      </div>
      <div className="px-4 py-2 rounded-3xl shadow-2xl bg-zinc-800 pb-4 mt-4">
        <Input label={"Username"} readOnly value={hold.username} />
        <div className="text-zinc-300">
          <label htmlFor="">Site</label>
          <a href={hold.site_url} className="block underline">
            {hold.site_url}
          </a>
        </div>
        <Input label={"Email"} readOnly value={hold.email} />
        <Input
          label={"Password"}
          readOnly
          value={hold.password}
          type="password"
        />
        <div className="my-3 text-zinc-300">
          <label className=" block mb-1 text-sm">Note</label>
          <textarea
            value={hold.note}
            className="p-2 outline-none rounded-t-lg w-full bg-zinc-600 border-b-2 border-blue-400 min-h-[70px] max-h-[70px]"
            readOnly
          />
        </div>
        <div className="flex space-x-3 font-bold text-zinc-300">
          <button
            type="button"
            className="py-1 px-4 border border-blue-300 rounded-full hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              setToggleEditMod(true);
              setHoldPassword(hold);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="py-1 px-4 border border-blue-300 rounded-full hover:bg-zinc-700 cursor-pointer"
            onClick={() => deleteHandler()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPassword;
