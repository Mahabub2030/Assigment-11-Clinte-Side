import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllBooks from "../components/AllBooks";
import AddBooks from "../components/AddBooks";
import BorrowedBooks from "../components/BorrowedBooks";
import Details from "../components/Details";
import Category from "../components/Category";
import PrivateRoute from "../components/PrivateRoute";
import UpdateBooks from "../components/UpdateBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    //   errorElement: <h2>Rought not found</h2>,
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
        path: '/All Books',
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        loader: () => fetch('https://library-management-system-blush-pi.vercel.app/books')
      },
      {
        path: '/Add Books',
        element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path: '/updateBooks/:id',
        element: <UpdateBooks></UpdateBooks>,
        loader: ({ params }) => fetch(`https://library-management-system-blush-pi.vercel.app/books/${params.id}`)
      },
      {
        path: '/Borrowed Books',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        loader: () => fetch('https://library-management-system-blush-pi.vercel.app/borrowedBooks')
      },
      {
        path: '/category/:category',
        element: <Category></Category>,
        loader: async ({ params }) => {
          const res = await fetch('https://library-management-system-blush-pi.vercel.app/books')
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
          const res = await fetch('https://library-management-system-blush-pi.vercel.app/books')
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