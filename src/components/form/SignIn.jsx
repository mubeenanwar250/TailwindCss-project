import React from "react";

export const SignIn = ({register}) => {


  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full hover:shadow-xl">
          <h1 className="mb-8 text-3xl text-center">Sign Ip</h1>
          

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
         
          <button
            type=""
            className="w-full text-center py-3 bg-yellow-400  border rounded-full text-black  focus:outline-none my-1"
          >
            LogIn Account
          </button>

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
            <button onClick={register}>
            sign up

            </button>
          .
        </div>
        
      </div>
    </div>
  );
};

export default SignIn;
