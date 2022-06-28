import React, { useState, useEffect , useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = ({ register }) => {
  const nameTag = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    nameTag.current.focus();
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeEvent = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    const localUsers = JSON.parse(localStorage.getItem("userData"));
    const userFound = localUsers.filter((singleUser) => {
      return (
        singleUser.password == userData.password &&
        singleUser.email == userData.email
        );
      });
      if (userFound.length) return navigate("/dashboard");
      alert("wrong password/email");
      e.preventDefault()
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full hover:shadow-xl">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>

          <form onSubmit={(e)=>submit(e)}>
            <input
              ref={nameTag}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => onChangeEvent(e)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => onChangeEvent(e)}
            />

            <button
              className="w-full text-center py-3 bg-yellow-400  border rounded-full text-black  focus:outline-none my-1"
            >
              LogIn Account
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By Login, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          if you not have an account?
          <button onClick={register}>sign up</button>.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
