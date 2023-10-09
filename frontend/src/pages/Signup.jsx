import React, { useState } from 'react';
import loginimg from '../assets/login-anime.gif';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      image: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (!fetchData.ok) {
            console.error('Error:', fetchData.status, fetchData.statusText);
            const responseText = await fetchData.text();
            console.error('Response:', responseText);
            alert('An error occurred while signing up');
          } else {
            const dataRes = await fetchData.json();
            console.log(dataRes);
            alert('Successfully signed up');
            navigate('/login');
          }
        } catch (error) {
          console.error('Network error:', error);
          alert('An error occurred while processing the request');
        }
      } else {
        alert('Password and Confirm Password do not match');
      }
    } else {
      alert('Please fill in all required fields');
    }
  };



  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-2">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow">
          <img src={data.image ? data.image : loginimg} alt="" className="w-full h-full" />
          <label htmlFor='profileImage'>
          
          <div className='absolute bottom-0 h-1/3 bg-pink-500 bg-opacity-30 w-full text-center'>
           <p className='text-sm p-1 text-white cursor-pointer '>Upload</p>
          </div>
          <input type={"file"} id='profileImage' accept='image/*'
           onChange={handleUploadProfileImage}
          className='hidden'/>
          </label>
        </div>

        <form className="w-full py-3" onSubmit={handleSubmit}>
          {/* Labels and input fields */}
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full mb-2 bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />
          {/* Add similar labels and inputs for Last Name, Email, Password, and Confirm Password */}
          

          <label htmlFor='lastName'>Last Name</label>
             <input type={'text'} id='lastName' name='lastName'
              value={data.lastName}
              onChange={handleOnChange}
             className='w-full  mb-2 bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300'/>
           
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
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <div className='flex px-2 py-1 mb-2 bg-slate-200 mt-1 focus-within:outline-blue-300 outline-none border-none rounded'>
                 <input type={showConfirmPassword ?"text": "password"}
                  id='confirmpassword' name='confirmPassword' 
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                 className='w-full rounded bg-slate-200 border-none outline-none'/>
                 <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}> {showConfirmPassword? 
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
            Sign Up
          </button>
        </form>

        <p className="text-left text-sm mt-3">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
