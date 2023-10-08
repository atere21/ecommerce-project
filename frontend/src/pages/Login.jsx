
import React, { useState } from 'react';
import loginimg from '../assets/login-anime.gif';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    password: '',
    confirmPassword: '',
  });
  console.log(data)

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(( preve) =>{
      return {
        ...preve,
        [name]: value
      }
    
  });
}

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents the form from submitting (you may need to implement form submission logic)
    // Add your logic to handle form submission, validation, and API calls here
    const {email,password} = data
    if( email && password){
     
        alert("successfully Logged in")
      
      
    }
      else{
        alert("please enter required field")
      }
  };


  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-2">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow">
          <img src={loginimg} alt="" className="w-full" />
        </div>

        <form className="w-full py-3" onSubmit={handleSubmit}>
          {/* Labels and input fields */}
         
             <label htmlFor='email'>Email</label>
             <input type={'email'} id='email' name='email'
              value={data.email}
              onChange={handleOnChange}
             className='w-full  mb-2 bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300'/>
          
             <label htmlFor='password'>Password</label>
              <div className='flex px-2 py-1 mb-2 bg-slate-200 mt-1 focus-within:outline-blue-300 outline-none border-none rounded'>
                 <input
                  value={data.password}
                  onChange={handleOnChange}
                 type={showPassword ?"text": "password"} id='password' name='password' className='w-full rounded bg-slate-200 border-none outline-none'/>
                   <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword? 
                        <BiShow/>:
                        <BiHide/>
                   }
               </span>

            </div> 
          
          <button
            type="submit"
            className="w-full text-white font-medium items-center m-auto bg-pink-700 hover:bg-pink-600 cursor-pointer
                 text-xl py-1 rounded-full justify-center text-center"
          >
            Login
          </button>
        </form>

        <p className="text-left text-sm mt-3">
          Dont have an account?{' '}
          <Link to="/signup" className="text-pink-600 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
