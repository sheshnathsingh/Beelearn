import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminService } from "../services";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await adminService.login(loginData.email, loginData.password);
    setLoading(false);

    if (result.success) {
      alert("Admin login successful!");
      navigate("/admin/dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-96"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-600 mt-2">Access the admin dashboard</p>
        </div>
        {error && <p className="text-red-500 text-center mt-2 mb-4">{error}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter admin email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter admin password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all disabled:bg-gray-400 font-semibold"
          >
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          <span
            className="text-teal-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            User Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
