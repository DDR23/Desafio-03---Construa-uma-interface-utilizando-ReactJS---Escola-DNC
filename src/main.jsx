import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App.jsx'
import '../styles/globals.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Delete from './pages/delete/Delete.jsx'
import Edit from './pages/edit/Edit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/delete",
    element: <Delete/>,
  },
  {
    path: "/edit",
    element: <Edit/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);