import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FcGlobe, FcGoogle } from "react-icons/fc";

function RegisterForm() {
  return (
    <div className="p-10 bg-white rounded-xl shadow-md h-fit flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg" id="careers">
          Create yours JobSeeker profile
        </h2>
        <p className="text-sm text-gray-500 font-semibold">
          To create a new profile, please fill out the form below. Your profile
          will appear on our website, allowing potential employers to find you.
        </p>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 w-4/5">
          {/* First Name */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" for="first_name">
              First name <span className="text-red-600 font-semibold">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="w-full outline-none border rounded-md p-2 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter First name
              </label>
            </div>
          </div>

          {/* Email ID */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" for="first_name">
              Email ID <span className="text-red-600 font-semibold">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="w-full outline-none border rounded-md p-2 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter your Email ID
              </label>
            </div>
            <p className="text-xs text-gray-500 font-semibold ">
              We'll send you a relevant jobs and updates to this email address.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-2">
          <span className="flex-1 border-l border-gray-300 h-full mb-1"></span>
          <span className="text-center text-xs font-bold text-gray-500">
            Or
          </span>
          <span className="flex-1 border-l border-gray-300 h-full mt-1"></span>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <label className="text-center text-sm font-bold">Continue with</label>
          <button className="flex items-center justify-center gap-2 rounded-3xl border border-blue-700 text-blue-700 font-semibold px-4 py-2">
            <FcGoogle /> Google
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-4/5 ">
        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-semibold" for="first_name">
            Password <span className="text-red-600 font-semibold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="w-full outline-none border rounded-md p-2 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Enter Password
            </label>
          </div>
          <p className="text-xs text-gray-500 font-semibold ">
            This help your account to stay protected
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-semibold" for="first_name">
            Mobile Number <span className="text-red-600 font-semibold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="w-full outline-none border rounded-md p-2 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Enter your mobile number
            </label>
          </div>
          <p className="text-xs text-gray-500 font-semibold ">
            Recruiter will contact you on this number
          </p>
        </div>

        <div className="mt-2 flex gap-2 items-center">
          <input id="updates-promotions" type="checkbox" className="h-4 w-4" />
          <label
            htmlFor="updates-promotions"
            className="text-sm font-semibold text-gray-500"
          >
            Send me important updates & promotions via SMS, emails, and{" "}
            <span className="inline-flex items-center gap-1">
              <FaWhatsapp /> WhatsApp
            </span>
          </label>
        </div>

        <div className="mt-4">
          <button className="w-fit bg-blue-700 text-white font-semibold py-2 px-4 rounded-3xl">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
