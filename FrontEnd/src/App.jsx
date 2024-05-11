import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import UserContext from "./context";

function App() {
  const [toggleNewMod, setToggleNewMod] = useState(false);
  const [toggleEditMod, setToggleEditMod] = useState(false);
  const [holdPassword, setHoldPassword] = useState({});
  const values = {
    toggleNewMod,
    setToggleNewMod,
    toggleEditMod,
    setToggleEditMod,
    holdPassword,
    setHoldPassword,
  };

  return (
    <>
      <UserContext.Provider value={values}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
