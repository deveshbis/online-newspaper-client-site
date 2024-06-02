import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import ArticlesViewDetails from "../Pages/ArticlesViewDetails/ArticlesViewDetails";
import PrivateRoute from "./PrivateRoute";
import Subscribtion from "../Pages/Subscribtion/Subscribtion";
import AddArticle from "../Pages/AddArticle/AddArticle";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/article/:id",
            element: <PrivateRoute><ArticlesViewDetails></ArticlesViewDetails></PrivateRoute>,
        },
        {
            path: "/subscription",
            element: <PrivateRoute><Subscribtion></Subscribtion></PrivateRoute>,
        },
        {
            path: "/AddArticle",
            element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;