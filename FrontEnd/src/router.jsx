import { Passwords, ViewPassword } from "./components";
import Layout from "./Layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<Layout />}
      children={
        <>
          <Route path="/passwords" element={<Passwords />} />
          <Route path="/passwords/:site_url" element={<ViewPassword />} />
        </>
      }
    />
  )
);

export default router;
