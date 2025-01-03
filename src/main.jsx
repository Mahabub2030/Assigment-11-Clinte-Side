import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
