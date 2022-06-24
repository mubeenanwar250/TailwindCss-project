import React,{useState,useRef} from "react";
import { useEffect } from "react";

export const  SignUp = ({ register }) =>{
  const nameTag = useRef()
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    nameTag.current.focus()
    setUserData(
      JSON.parse(localStorage.userData ? localStorage.userData : `[]`)
      );
    }, []);
    
    useEffect(() => {
      if(userData.length < 1) return 
      localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);
    
  const [userRegisterData,setUserRegisterData] =useState({
    fullname:'',
    email:'',
    password:'',
    confirm_password:'',
  })

  const inputChange = (e)=>{
    setUserRegisterData({...userRegisterData,[e.target.name]:e.target.value})
  }

  const Submit = ()=>{
    if(userRegisterData.password !== userRegisterData.confirm_password) return alert('password not matched')
    const userFound = userData.filter(user=>user.fullname == userRegisterData.fullname)
    if(userFound.length) return alert('userName already exists')
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(reg.test(userRegisterData.email))return  setUserData([...userData, userRegisterData]);
    alert('Please enter valid email.');
  }

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
            class="block border border-grey-light w-full p-3 rounded mb-4"
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
}

export default SignUp;
