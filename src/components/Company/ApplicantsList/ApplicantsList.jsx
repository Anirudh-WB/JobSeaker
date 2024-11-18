import React from "react";
import userImage from "../../../assets/white-boy.a0d2814a.png";
import { useNavigate } from "react-router-dom";

function ApplicantsList() {
  const users = [
    { name: "John Doe", email: "john@doe.com", phone: 7418529630 },
    { name: "Johnny Do", email: "johnny@do.com", phone: 9638527410 },
    { name: "Don Joe", email: "don@joe.com", phone: 9876543210 },
  ];

  const navigate = useNavigate();

  return (
    <div className="py-10 px-40 flex flex-col">
      <div className="flex items-center gap-5 border-t p-3 bg-blue-400 font-bold text-white">
        <h2 className="w-32 text-center">Sr. No.</h2>
        <h2 className="w-2/5">Name</h2>
        <h2 className="w-2/5">Email</h2>
        <h2 className="w-1/4">Phone</h2>
      </div>
      {users.map((user, index) => (
        <div
          className="flex items-center gap-5 border-t p-3 cursor-pointer hover:bg-slate-100"
          key={index}
          onClick={() => navigate("/profile")}
        >
          <h2 className="w-32 text-center">{index + 1}</h2>
          <h2 className="w-2/5 flex gap-3 items-center font-medium">
            <img
              src={userImage}
              alt=""
              className="h-10 w-10 rounded-full object-center"
            />
            {user.name}
          </h2>
          <h2 className="w-2/5">{user.email}</h2>
          <h2 className="w-1/4">{user.phone}</h2>
        </div>
      ))}
    </div>
  );
}

export default ApplicantsList;
