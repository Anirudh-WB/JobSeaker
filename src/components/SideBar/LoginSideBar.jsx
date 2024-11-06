import React from "react";
import { FcGoogle } from "react-icons/fc";

function LoginSidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-50" />}
      <div
        className={`fixed top-0 right-0 w-1/3 h-full rounded-tl-3xl rounded-bl-3xl shadow-gray-600 bg-white text-white transition-transform z-50 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="p-5 text-right">
          <button
            onClick={toggleSidebar}
            className="text-black text-3xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="flex items-center justify-between pl-8 pr-8">
          <span className="text-xl font-bold text-black">Login</span>
          <span className="text-md font-bold text-blue-600">
            Register for free
          </span>
        </div>

        <form className="flex flex-col gap-2 p-8">
          <label className="font-semibold text-black">
            Email ID / Username
          </label>
          <input
            type="text"
            placeholder="Email or Username"
            className="p-3 w-full rounded-xl text-black placeholder-gray-500 outline-none border"
          />
          <label className="font-semibold text-black">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 w-full rounded-xl text-black placeholder-gray-500 outline-none border"
          />
          <a href="/" className="text-blue-600 text-right font-bold">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="mt-2 w-full h-12 rounded-3xl bg-blue-600 text-white font-bold"
          >
            Login
          </button>

          <a href="/" className="text-blue-600 text-center font-bold">
            Use OTP to Login
          </a>

          <div className="flex items-center p-2">
            <span className="flex-1 border-t border-gray-300 mr-2"></span>
            <span className="text-center text-xs font-bold text-gray-500">
              Or
            </span>
            <span className="flex-1 border-t border-gray-300 ml-2"></span>
          </div>

          <button className="mt-4 w-full h-12 rounded-3xl bg-white text-blue-500 border-2 border-blue-500 font-bold flex items-center justify-center">
            <FcGoogle className="mr-2" /> Sign in with Google
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginSidebar;
