import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
// import Register from "../Pages/Registration/Register";
import ArticlesViewDetails from "../Pages/ArticlesViewDetails/ArticlesViewDetails";
import PrivateRoute from "./PrivateRoute";
import Subscribtion from "../Pages/Subscribtion/Subscribtion";
// import AddArticle from "../Pages/AddArticle/AddArticle";
import Dashboard from "../Dashboard/Dashboard";

import AllArticles from "../Pages/All Articles/AllArticles";
import Register from "../Pages/Registration/Register";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddPublisher from "../Dashboard/AddPublisher/AddPublisher";
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
      {
        path: "/allArticles",
        element: <PrivateRoute><AllArticles></AllArticles></PrivateRoute>,
      },
      {
        path: "/premiumArticles",
        element: <PrivateRoute></PrivateRoute>,
      },
    ]
  },

  {
    path: "dashboard",
    element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
    children: [
      
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
      {
        path: 'addPublisher',
        element: <AddPublisher></AddPublisher>,
      },
    ]
  }
]);

export default router;