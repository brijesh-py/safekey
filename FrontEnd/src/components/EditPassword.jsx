import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context";
import Input from "./Input";
import auth from "../auth";

const EditPassword = () => {
  const { toggleEditMod, setToggleEditMod, holdPassword } =
    useContext(UserContext);

  const { register, handleSubmit, setValue } = useForm();
  const onSave = async (data) => {
    const response = await auth.savePassword(data);
    response.success && setToggleEditMod(false);
  };

  useEffect(() => {
    setValue("site_url", holdPassword.site_url);
    setValue("email", holdPassword.email);
    setValue("username", holdPassword.username);
    setValue("password", holdPassword.password);
    setValue("note", holdPassword.note);
  });

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 z-10 flex items-center justify-center px-3 ${
        toggleEditMod ? "" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <div className="p-3 sm:p-5 bg-zinc-800 rounded-xl shadow-2xl shadow-zinc-800 sm:w-[600px]">
        <h3 className="text-white text-lg font-bold">Edit Password</h3>
        <form
          onSubmit={handleSubmit(onSave)}
          className="mt-3 text-zinc-200 text-sm"
        >
          <Input
            {...register("site_url", { required: true })}
            label={"Site"}
            placeholder={"example.com"}
          />
          <Input {...register("email")} label={"Email Address"} type="email" />
          <Input {...register("username")} label={"Username"} />
          <Input
            type="password"
            {...register("password", { required: true })}
            label={"Password"}
          />
          <span className="text-zinc-400">
            Make sure you're saving your current password for this site
          </span>
          <div className="border border-spacing-1 my-3 border-zinc-700"></div>
          <div className="my-3 text-zinc-300">
            <label className=" block mb-1 ">Note</label>
            <textarea
              {...register("note")}
              className="p-2 outline-none rounded-t-lg w-full bg-zinc-600 border-b-2 border-blue-400 min-h-[70px] max-h-[70px]"
            />
          </div>
          <div className="flex space-x-3 font-bold">
            <button
              type="button"
              className="py-1 px-4 border border-blue-300 rounded-full hover:bg-zinc-700 cursor-pointer"
              onClick={() => setToggleEditMod(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1 px-4 border border-blue-300 rounded-full hover:bg-zinc-700 cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPassword;
