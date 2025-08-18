import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Profile  from"./Pages/Profile";
import Cards from"./Pages/Cards";
import CardVariants from './Pages/carVariants';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import HomePage from './Pages/Home';

function App() {
  return (
    <>
     
      <Routes>
      {/* <Navbar/>
      <Home/>
      <Profile/>
      <Cards/>
      <CardVariants/>
      <Footer/> */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
