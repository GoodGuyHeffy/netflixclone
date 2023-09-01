import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

function NavBar() {

 const {user, logOut} = UserAuth();
 //console.log(user)
const navigate = useNavigate();


 const handleLogout = async () => {
    try {
      await logOut()
      navigate('/');
    } catch(error) {
       console.log(error)
    }
 };




  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full relative z-100'>
      <Link to='/'>
        <h1 className='text-blue-700 text-4xl font-bold cursor-pointer'>NOTFLIX</h1>
        </Link>
        {user?.email ? <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
            </Link>
          
            <button onClick={handleLogout} className='bg-blue-700 px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>
            
        </div> : <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
            <button className='bg-blue-700 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>}
    </div>
  )
}

export default NavBar;