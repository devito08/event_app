import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://event-app-yha0.onrender.com/api/login', formData);

      localStorage.setItem('token', response.data.token);
      onLoginSuccess('/');
      toast.success("Login Successful");
      
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center h-64 p-4" style={{ backgroundImage: "url('/images/bg.jpg')" }} >
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 shadow-2xl rounded-lg">
        <h1 className="text-center text-2xl font-bold text-white mb-6">Login</h1>
        <div className="mb-6">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-6">
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit" 
          className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <h3>Don't have an account ? <a href='/register' alt='register' className='text-blue-800 font-bold'>Register</a></h3>

        </div>
        
      </form>
    </div>
    
  );
};

export default Login;

