import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Profile  from"./Pages/Profile";
import Cards from"./Pages/Cards";
import CardVariants from './Pages/carVariants';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import About from './Pages/About';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        
        {/* User Routes */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/quiz/:classNumber/:subject' element={<Quiz/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
        {/* Admin Routes */}
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
