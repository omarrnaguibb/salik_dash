// src/Login.js
import React, { useState } from "react";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Hardcoded credential check (replace with your own logic if needed)
    if (username === "O" && password === "558855") {
      // Generate a random token string (no real JWT)
      const randomToken = Math.random().toString(36).slice(2);
      localStorage.setItem("token", randomToken);
      window.location.href = "/";
    } else {
      setErrorMsg("Invalid username or password");
    }
  };

  return (
    <div className="w-full flex items-center justify-center md:justify-start flex-col gap-y-5 py-5 h-screen">
      <img src="/logo.png" />
      <h3 className="mb-4 font-bold text-xl text-center">Salik Dashboard</h3>
      <form onSubmit={handleSubmit} className="md:w-1/3 w-10/12">
        {errorMsg && (
          <div className="w-full text-center text-red-500" role="alert">
            {errorMsg}
          </div>
        )}
        <div className=" mb-3 flex flex-col gap-y-4 w-full">
          <label className="text-xl">Username</label>
          <input
            type="text"
            className="form-control bg-gray-100 rounded-lg text-lg p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className=" mb-3 flex flex-col gap-y-4">
          <label className="text-xl">Password</label>
          <input
            type="password"
            className="form-control bg-gray-100 rounded-lg text-lg p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-5 py-2 rounded-md ">
          Sign In
        </button>
      </form>
    </div>
  );
}
