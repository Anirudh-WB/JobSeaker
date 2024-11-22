import axios from "axios";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

function LoginUtility() {
  const [loginCredentials, setLoginCredentials] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5203/api/Auth/login",
        loginCredentials
      );

      setLoginCredentials({
        emailAddress: "",
        password: "",
      });

      toast.success("Login Successfull", {
        toastId: "login__toast",
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
    } catch (err) {
      toast.error(err.response.data, {
        toastId: "login__toast",
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

  return { loginCredentials, handleChange, handleSubmit };
}

export default LoginUtility;
