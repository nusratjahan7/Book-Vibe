import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes';
import BookProvider from './Context/BookContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
         <RouterProvider router={router} />
         <ToastContainer />
    </BookProvider>
   
  </StrictMode>,
)
