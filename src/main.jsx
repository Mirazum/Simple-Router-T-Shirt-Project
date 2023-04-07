import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import OrderReview from './Components/Order Review'
import About from './Components/About'
import Contact from './Components/Contact'
import ErrorPage from './Components/ErrorPage'
import LoadingSpinner from './Components/LoadingSpinner'


const router = createBrowserRouter([{
  path:'/',
  element:<App></App>,
  errorElement: <ErrorPage />,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader: ()=> fetch('tshirts.json')
    },
    {
      path:'orders',
      element:<OrderReview></OrderReview>
    },
    {
      path:'about',
      element:<About></About>,
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    {
      path:'loader',
      element:<LoadingSpinner></LoadingSpinner>
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
