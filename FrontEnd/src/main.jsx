import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./router/Routers.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(Routers)} />
  </StrictMode>,
)
