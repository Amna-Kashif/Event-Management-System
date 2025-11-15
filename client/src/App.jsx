import React from 'react'
import Topbar from './components/topbar/Topbar'
import './App.css'
import ResponsiveDrawer from './components/drawer/Drawer'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/drawer/*' element={<ResponsiveDrawer />} />
    </Routes>
    </>
  )
}

export default App