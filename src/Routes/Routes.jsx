import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import ShopCategoryDetails from "../pages/ShopCategoryDetails/ShopCategoryDetails";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../pages/MyToys/UpdateToys";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "addtoys",
        element: <PrivateRoute><AddToy /></PrivateRoute>
      },
      {
        path: "toys/:id",
        element: <PrivateRoute><ShopCategoryDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/all-toys/${params.id}`)
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: "alltoys",
        element: <AllToys />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "updatetoys/:id",
        element: <PrivateRoute><UpdateToys /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/get-my-toys/${params.id}`)
      }

    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;