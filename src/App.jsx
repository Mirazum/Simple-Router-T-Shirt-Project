import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <ToastContainer />
       
    </div>
  )
}

export default App
