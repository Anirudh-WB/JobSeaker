import React from "react";
import RegisterInfo from "./RegisterInfo";
import RegisterForm from "./RegisterForm";

function Regsiter() {
  return (
    <div className="flex gap-10 px-40 py-10">
      <RegisterInfo />
      <RegisterForm />
    </div>
  );
}

export default Regsiter;
