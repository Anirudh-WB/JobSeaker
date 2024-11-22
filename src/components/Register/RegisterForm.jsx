import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CommonUtility from "../../utility/CommonUtility";
import RegisterUtility from "../../utility/RegisterUtility";
import { Bounce, ToastContainer } from "react-toastify";

function RegisterForm() {
  const commonUtility = CommonUtility();
  const registerUtility = RegisterUtility();
  return (
    <>
      <div className="p-10 bg-white rounded-xl shadow-md h-fit flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-lg" id="careers">
            Create yours JobSeeker profile
          </h2>
          <p className="text-sm text-gray-500 font-semibold">
            To create a new profile, please fill out the form below. Your
            profile will appear on our website, allowing potential employers to
            find you.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-base font-semibold">Register as : </label>
          <select className="ml-2 outline-none border p-2 rounded-md w-2/3 text-sm text-gray-700">
            {commonUtility.login.map((user) => (
              <option>{user}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 w-4/5">
            <div className="flex flex-1 gap-4">
              {/* First Name */}
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-base font-semibold" for="first_name">
                  First name{" "}
                  <span className="text-red-600 font-semibold">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full outline-none border rounded-md p-2 peer"
                    placeholder=" "
                    value={registerUtility.registerData.firstName}
                    onChange={(e) => registerUtility.handleChange(e)}
                  />
                  <label
                    for="floating_outlined"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Enter First name
                  </label>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-base font-semibold" for="first_name">
                  Last name{" "}
                  <span className="text-red-600 font-semibold">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full outline-none border rounded-md p-2 peer"
                    placeholder=" "
                    value={registerUtility.registerData.lastName}
                    onChange={(e) => registerUtility.handleChange(e)}
                  />
                  <label
                    for="floating_outlined"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Enter Last name
                  </label>
                </div>
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
                  id="emailAddress"
                  className="w-full outline-none border rounded-md p-2 peer"
                  placeholder=" "
                  value={registerUtility.registerData.emailAddress}
                  onChange={(e) => registerUtility.handleChange(e)}
                />
                <label
                  for="floating_outlined"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Enter your Email ID
                </label>
              </div>
              <p className="text-xs text-gray-500 font-semibold ">
                We'll send you a relevant jobs and updates to this email
                address.
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
            <label className="text-center text-sm font-bold">
              Continue with
            </label>
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
                id="password"
                className="w-full outline-none border rounded-md p-2 peer"
                placeholder=" "
                value={registerUtility.registerData.password}
                onChange={(e) => registerUtility.handleChange(e)}
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
              Mobile Number{" "}
              <span className="text-red-600 font-semibold">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="contactNo"
                className="w-full outline-none border rounded-md p-2 peer"
                placeholder=" "
                value={registerUtility.registerData.contactNo}
                onChange={(e) => registerUtility.handleChange(e)}
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
            <input
              id="updates-promotions"
              type="checkbox"
              className="h-4 w-4"
            />
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
            <button
              className="w-fit bg-blue-700 text-white font-semibold py-2 px-4 rounded-3xl"
              onClick={(e) => registerUtility.handleSubmit(e)}
            >
              Register now
            </button>
          </div>
        </div>
      </div>

      <ToastContainer
        // containerId="register__toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default RegisterForm;
