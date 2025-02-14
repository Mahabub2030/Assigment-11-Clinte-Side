import { createBrowserRouter } from "react-router-dom";
import AddBooks from "../components/AddBooks";
import AllBooks from "../components/AllBooks";
import BorrowedBooks from "../components/BorrowedBooks";
import Category from "../components/Category";
import Details from "../components/Details";
import PrivateRoute from "../components/PrivateRoute";
import UpdateBooks from "../components/UpdateBooks";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:<ErrorPage/>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/AllBooks',
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        loader: () => fetch(`https://server-pied-omega.vercel.app/books`)
      },
      {
        path: '/AddBooks',
        element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path: '/updateBooks/:id',
        element: <UpdateBooks></UpdateBooks>,
        loader: ({ params }) => fetch(`https://server-pied-omega.vercel.app/books/${params.id}`)
      },
      {
        path: '/BorrowedBooks',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        loader: () => fetch(`https://server-pied-omega.vercel.app/borrowedBooks`)
      },
      {
        path: '/category/:category',
        element: <Category></Category>,
        loader: async ({ params }) => {
          const res = await fetch(`https://server-pied-omega.vercel.app/books`)
          const data = await res.json()
          // console.log(data,params.lesson_no)
          const singleData = data.filter(d => d.category == params.category)
          return singleData
        }
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch(`https://server-pied-omega.vercel.app/books`)
          const data = await res.json()
          // console.log(data,params.lesson_no)
          const singleData = data.find(d => d._id == params.id)
          return singleData
        }
      },
    ],

  }
]);

export default router;