import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar'


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
                <Route path="main" element={<Main />}/>
                <Route path="register" element={<Register/>}/>
            </Route>
            
        </Routes>
    </Router>
  )
}

export default AppRouter