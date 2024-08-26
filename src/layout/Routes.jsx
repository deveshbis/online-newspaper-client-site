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
import AllArticlesPage from "../Dashboard/AllArticlesPage/AllArticlesPage";
import Profile from "../Pages/Profile/Profile";
import MyArticlesPage from "../Pages/MyArticlesPage/MyArticlesPage";
import MyAritcleView from "../Pages/MyArticlesPage/MyAritcleView";
import MyPageUpdate from "../Pages/MyArticlesPage/MyPageUpdate";
import Payment from "../Pages/Subscribtion/Payment";
import PremiumUser from "../Dashboard/PremiumUser/PremiumUser";
import AdminHome from "../Dashboard/AminHome/AdminHome";
import AllArticleView from "../Pages/All Articles/AllArticleView";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import PremiumViewDetails from "../Pages/PremiumArticles/PremiumViewDetails";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/register",
//         element: <Register></Register>,
//       },
//       {
//         path: "/article/:id",
//         element: <PrivateRoute><ArticlesViewDetails></ArticlesViewDetails></PrivateRoute>,
//       },
//       {
//         path: "/myArticles/:id",
//         element: <PrivateRoute><MyAritcleView/></PrivateRoute>,
//       },
//       {
//         path: "/myArticledUpdate/:id",
//         element: <PrivateRoute><MyPageUpdate/></PrivateRoute>,
//         loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/userPublisher/${params.id}`)

//       },



//       {
//         path: "/subscription",
//         element: <PrivateRoute><Subscribtion></Subscribtion></PrivateRoute>,
//       },



//       {
//         path: "/AddArticle",
//         element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>,
//       },
//       {
//         path: "/allArticles",
//         element: <PrivateRoute><AllArticles></AllArticles></PrivateRoute>,
//       },
//       {
//         path: "/premiumArticles",
//         element: <PrivateRoute></PrivateRoute>,
//       },
//       {
//         path: "/myArticlesPage",
//         element: <PrivateRoute><MyArticlesPage/></PrivateRoute>,
//       },
//       {
//         path: "/profile",
//         element: <PrivateRoute><Profile/></PrivateRoute>,
//       },
//     ]
//   },

//   {
//     path: "dashboard",
//     element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
//     children: [
      
//       {
//         path: 'users',
//         element: <AllUsers></AllUsers>,
//       },
//       {
//         path: 'addPublisher',
//         element: <AddPublisher></AddPublisher>,
//       },
//       {
//         path: 'allArticlesPage',
//         element: <AllArticlesPage/>,
//       },
//     ]
//   }
// ]);

// export default router;





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
        path: "/myArticles/:id",
        element: <PrivateRoute><MyAritcleView/></PrivateRoute>,
      },
      {
        path: "/myArticledUpdate/:id",
        element: <PrivateRoute><MyPageUpdate/></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/userPublisher/${params.id}`)

      },
      {
        path: "/payment/:id",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
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
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/approvedArticle/:id",
        element: <PrivateRoute><AllArticleView/></PrivateRoute>,
      },
      {
        path: "/premiumArticles",
        element: <PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>,
      },

      {
        path: "/premArticle/:id",
        element: <PrivateRoute><PremiumViewDetails/></PrivateRoute>,
      },
      
      {
        path: "/myArticlesPage",
        element: <PrivateRoute><MyArticlesPage/></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>,
      },
    ]
  },

  {
    path: "dashboard",
    element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
    children: [
      
      {
        path: 'adminHome',
        element: <AdminHome/>,
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
      {
        path: 'addPublisher',
        element: <AddPublisher></AddPublisher>,
      },
      {
        path: 'allArticlesPage',
        element: <AllArticlesPage/>,
      },
      {
        path: 'premiumUser',
        element: <PremiumUser/>,
      },
    ]
  }
]);

export default router;