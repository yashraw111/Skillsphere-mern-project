import { useState } from 'react'

import './App.css'
import SignUpForm from './pages/SignupPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { RouteIndex, RouterSignIn, RouterSignup } from './components/helpers/RoutesName'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={RouteIndex} element={<Layout/>} ></Route>
      <Route path={RouterSignIn} element={<LoginPage/>} ></Route>
      <Route path={RouterSignup} element={<SignUpForm/>} ></Route>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
