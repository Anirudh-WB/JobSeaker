import axios from "axios";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { setUser } from "../redux/user/userSlice";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { toggleLoginSideBar } from "../redux/modal/modalSlice";
import {
  setCompanyAccess,
  setJobSeekerAccess,
} from "../redux/other/otherSlice";

function LoginUtility() {
  const dispatch = useDispatch();

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
      const res = await axios.post(
        "http://localhost:5203/api/Auth/login",
        loginCredentials
      );

      const user = res.data.userInfo;

      localStorage.setItem("userInfo", JSON.stringify(user));

      store.dispatch(setUser(user));

      if (user.role === "Cp001") {
        store.dispatch(setCompanyAccess());
      } else if (user.role === "Js001") {
        store.dispatch(setJobSeekerAccess());
      }

      setLoginCredentials({
        emailAddress: "",
        password: "",
      });

      dispatch(toggleLoginSideBar());

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
      console.log(err);

      //   toast.error(err.response.data, {
      //     toastId: "login__toast",
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //     transition: Bounce,
      //   });
    }
  };

  return { loginCredentials, handleChange, handleSubmit };
}

export default LoginUtility;
