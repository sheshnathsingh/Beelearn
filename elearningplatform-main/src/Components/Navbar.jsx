import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
//  import Login from "../Pages/Login";

const Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-semibold text-teal-600">
            <span className="text-4xl">&#9906;</span> open Mock Test
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Dropdown label="Our solutions" />
            <Dropdown label="Find courses" />
          </div>
          
          {/* Login/Signup Button */}
          {/* <Link
            to='#'
            className="hidden md:block bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold"
          >
            Log in | Sign up
          </Link> */}
          <button
          onClick={()=>navigate("/login")}
           className="hidden md:block bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold"
          >
          Log in | Sign up
          </button>

          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <Dropdown label="Our solutions" mobile />
          <Dropdown label="Find courses" mobile />
          {/* <Link
            to="#"
            className="block text-center bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 mt-4 rounded-full font-semibold"
          >
            Log in | Sign up
          </Link> */}
          <button

           className="block text-center bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 mt-4 rounded-full font-semibold"
          >Log in | Sign in
          </button>
        </div>
      )}
    </nav>
  );
}

function Dropdown({ label, mobile }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-teal-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className={`absolute ${mobile ? "relative" : "absolute left-0 bg-white shadow-md border"} mt-2 w-40 p-2 rounded-md`}>
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</Link>
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</Link>
        </div>
      )}
    </div>
  );
}
export default  Navbar ;
