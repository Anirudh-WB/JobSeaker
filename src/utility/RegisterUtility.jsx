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
    role: "JobSeekers", 
  });

  const roleMapping = {
    Company: 2,
    JobSeekers: 3,
  };

  // Handle input changes
  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const payload = {
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        emailAddress: registerData.emailAddress,
        password: registerData.password,
        contactNo: registerData.contactNo,
        roleId: roleMapping[registerData.role], 
      };

      const response = await axios.post("http://localhost:5203/api/Auth/register", payload);

      console.log("Response:", response.data);

      setRegisterData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        contactNo: "",
        role: "JobSeekers",
      });

      toast.success("Registered Successfully", {
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
      console.error("Error during registration:", error.response?.data || error.message);

      // Error notification
      toast.error(error.response?.data?.message || "Invalid Data", {
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
