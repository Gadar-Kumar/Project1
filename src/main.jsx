import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login.jsx'
import Layout from './component/Layout.jsx'
import Home from './component/Home.jsx'
import Register from './component/Register.jsx'
import About from './component/About/About.jsx'
import FeedbackForm from './component/FeedbackForm.jsx'
import Content from './component/contents/Content.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:'about',
        element:<About />
      },{
        path:'feedback',
        element:<FeedbackForm/>
      },{
        path:'content',
        element:<Content/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
