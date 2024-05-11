import { IoMdClose } from "react-icons/io";


const SuccessMSG = () => {
  return (
    <div className="p-3 rounded-lg bg-green-100 w-[240px] mx-auto border border-blue-400  top-3 fixed  z-20 left-[12%] ">
      <div className="flex justify-between items-center ">
        <span className="text-zinc-900 font-bold">Saved Password</span>
        <span className="font-bold text-blue-500 text-md cursor-pointer text-xl">
        <IoMdClose />
        </span>
      </div>
    </div>
  );
};

export { SuccessMSG };
