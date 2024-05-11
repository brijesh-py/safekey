import { Outlet } from "react-router-dom";
import { NewPassword, Navbar, Sidebar, EditPassword } from "./components";

const Layout = () => {
  return (
    <>
      <NewPassword />
      <EditPassword />
      <Navbar />
      <main>
        <Sidebar />
        <div className="p-3 sm:p-4 md:ml-64 mx-auto">
          <div className="max-w-[700px] mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
