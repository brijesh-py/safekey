import { forwardRef, useRef, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { BsClipboard } from "react-icons/bs";

const Input = (
  { type = "text", value, label, className = "", ...props },
  ref
) => {
  const [eye, setEye] = useState(type);

  const copiedPassHandler = () => {
    navigator.clipboard && navigator.clipboard.writeText(value);
  };

  return (
    <div className="my-4 text-zinc-300">
      <label className="block mb-1 text-sm" htmlFor={label}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={eye}
          ref={ref}
          value={value}
          {...props}
          className="p-2 outline-none rounded-t-lg w-full bg-zinc-600 border-b-2 border-blue-400"
        />
        {type == "password" ? (
          eye == "text" ? (
            <>
              <span
                className=" p-2 text-lg cursor-pointer"
                onClick={() => setEye("password")}
              >
                <IoEyeOffOutline />
              </span>
            </>
          ) : (
            <>
              {" "}
              <span
                className=" p-2 text-lg cursor-pointer"
                onClick={() => setEye("text")}
              >
                <MdOutlineRemoveRedEye />
              </span>
              <span
                className="cursor-pointer hover:text-blue-400"
                onClick={copiedPassHandler}
              >
                <BsClipboard />
              </span>
            </>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
