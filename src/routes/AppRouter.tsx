import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
// pages

import Trending from "../pages/Trending";
import Rings from "../pages/Rings";
import Necklaces from "../pages/Necklaces";
import Watches from "../pages/Watches";
import Earrings from "../pages/Earrings";
import Braceletes from "../pages/Braceletes";
import NoseRaings from "../pages/NoseRaings"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Anklet from "../pages/Anklet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Trending />,
      },

      {
        path: "rings",
        element: <Rings />,
      },

      {
        path: "necklaces",
        element: <Necklaces />,
      },

      {
        path: "watches",
        element: <Watches />,
      },

      {
        path: "braceletes",
        element: <Braceletes />,
      },

      {
        path: "earrings",
        element: <Earrings />,
      },

      {
        path: "anklet",
        element: <Anklet />,
      },

      {
        path: "noseraings",
        element: <NoseRaings />,
      },
      
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;