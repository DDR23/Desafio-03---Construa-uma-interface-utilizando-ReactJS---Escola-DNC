import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../styles/globals.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tarefas from './pages/tarefas/Tarefas.jsx'
import Organizacao from './pages/organizacao/Organizacao.jsx'
import ErrorPage from './errorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Tarefas/>,
      },
      {
        path: "/organizacao",
        element: <Organizacao/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);