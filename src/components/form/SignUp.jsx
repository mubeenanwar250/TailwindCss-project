import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = ({ register }) => {
  const nameTag = useRef();
  const [userData, setUserData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    nameTag.current.focus();
    setUserData(
      JSON.parse(localStorage.userData ? localStorage.userData : `[]`)
    );
  }, []);

  const [userRegisterData, setUserRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
    img: "",
  });

  const inputChange = (e) => {
    console.log('ere')
    if (e.target.name == 'img') {
      base64(e.target.files[0])
        .then((result) => {
          setUserRegisterData({
            ...userRegisterData,
            [e.target.name]: result,
          })
          console.log(result)
            alert('image uploaded')
        })
        .catch((error) => {
          console.log(error);
        });
        return
    }
  setUserRegisterData({
    ...userRegisterData,
    [e.target.name]: e.target.value,
  });
};

const Submit = (e) => {
  e.preventDefault();
  if (userRegisterData.password !== userRegisterData.confirm_password)
    return alert("password not matched");
  const userFound = userData.filter(
    (user) => user.fullname == userRegisterData.fullname
  );
  console.log(userFound);
  if (userFound.length) return alert("userName already exists");
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (reg.test(userRegisterData.email)) {
    alert("user registered");
    localStorage.setItem("loggedInUser", JSON.stringify([userRegisterData]));
    localStorage.setItem(
      "userData",
      JSON.stringify([...userData, userRegisterData])
    );
    Navigate("/dashboard");
    return;
  }
  alert("Please enter valid email.");
};

return (
  <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full hover:shadow-xl">
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <form onSubmit={Submit}>
          <input
            ref={nameTag}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={inputChange}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={inputChange}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={inputChange}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={inputChange}
          />

          <input
            type="file"
            name="img"
            onChange={inputChange}
            id="image-input"
            accept="image/jpeg, image/png, image/jpg"
          />

          <div id="display-image"></div>

          <button
            type=""
            className="w-full text-center py-3 bg-yellow-400  border rounded-full text-black  focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
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
        Already have an account?
        <button onClick={register}>Log in</button>.
      </div>
    </div>
  </div>
);
};

export default SignUp;

const base64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};