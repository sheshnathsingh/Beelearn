
// import { useState } from "react";

// const Login=()=> {
//   const [isSignUp, setIsSignUp] = useState(true);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     console.log("Form Data Submitted:", data);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <div className="flex justify-between border-b pb-2 mb-4">
//           <button
//             className={`text-lg font-semibold px-4 py-2 ${isSignUp ? "border-b-2 border-blue-600" : "text-gray-500"}`}
//             onClick={() => setIsSignUp(true)}
//           >
//             Sign up
//           </button>
//           <button
//             className={`text-lg font-semibold px-4 py-2 ${!isSignUp ? "border-b-2 border-blue-600" : "text-gray-500"}`}
//             onClick={() => setIsSignUp(false)}
//           >
//             Log in
//           </button>
//         </div>
//         <p className="text-center text-gray-700 mb-4">
//           {isSignUp ? "Already have an account?" : "Don't have an account?"} 
//           <span
//             className="text-blue-600 cursor-pointer"
//             onClick={() => setIsSignUp(!isSignUp)}
//           >
//             {isSignUp ? " Log in" : " Sign up"}
//           </span>
//         </p>
//         <div className="space-y-3">
//           <button className="flex items-center justify-center w-full border rounded-lg p-2">
//             <img src="https://img.icons8.com/color/20/000000/microsoft.png" alt="Microsoft" className="mr-2" />
//             Sign {isSignUp ? "up" : "in"} with Microsoft
//           </button>
//           <button className="flex items-center justify-center w-full border rounded-lg p-2">
//             <img src="https://img.icons8.com/color/20/000000/facebook.png" alt="Facebook" className="mr-2" />
//             Sign {isSignUp ? "up" : "in"} with Facebook
//           </button>
//           <button className="flex items-center justify-center w-full border rounded-lg p-2">
//             <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" className="mr-2" />
//             Sign {isSignUp ? "up" : "in"} with Google
//           </button>
//         </div>
//         <div className="relative my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t"></div>
//           </div>
//           <div className="relative text-center">
//             <span className="bg-white px-2 text-gray-500">or</span>
//           </div>
//         </div>
//         <form className="space-y-3" onSubmit={handleSubmit}>
//           <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded-lg" required />
//           <input name="password" type="password" placeholder="Password" className="w-full p-2 border rounded-lg" required />
//           {isSignUp && <input name="fullName" type="text" placeholder="Full name" className="w-full p-2 border rounded-lg" required />}
//           <div className="flex items-center">
//             <input name="terms" type="checkbox" className="mr-2" required />
//             <label className="text-sm">
//               I agree to the <a href="#" className="text-blue-600">Terms of service</a> and <a href="#" className="text-blue-600">Privacy policy</a>
//             </label>
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">
//             {isSignUp ? "Sign up" : "Log in"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;
 
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { API_BASE_URL } from "../config/api";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(data.error || "Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
      >
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-teal-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
