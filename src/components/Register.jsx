import React, { useState } from "react";
import SignIn from "./form/SignIn";
import SignUp from "./form/SignUp";

export const Register = () => {
  const [register, setRegister] = useState(false);

  return (
    <div>
      {register ? (
        <SignIn register={() => setRegister(!register)}></SignIn>
      ) : (
        <SignUp register={() => setRegister(!register)}></SignUp>
      )}
    </div>
  );
};

export default Register;
