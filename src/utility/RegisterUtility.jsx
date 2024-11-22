import React from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

function RegisterUtility() {
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5203/api/Auth/register",
        registerData
      );

      setRegisterData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        contactNo: "",
      });
      toast.success("Register Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Invalid Data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
  return { registerData, handleChange, handleSubmit };
}

export default RegisterUtility;
