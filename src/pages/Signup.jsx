import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';




function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <>
    <div className='w-full h-screen'>
       <img className='hidden sm:block absolute w-full h-full object-cover' src="https://img.freepik.com/free-vector/technological-design-background_23-2148497493.jpg?w=740&t=st=1693296676~exp=1693297276~hmac=284447a88d34e1b22f1dc3eb1faa58c67fe1f5b4616e8608c7f414f2dbc6847e" alt="/"/>
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder="email" autoComplete='email'/>
                    <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder="password must be minimun 6 characters" autoComplete='current-password'/>
                    <button className='bg-blue-700 rounded py-3 my-6 font-bold'>Sign Up</button>
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input className='mr-2' type="checkbox" />Remember Me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='py-8'><span className='text-gray-600 px-2'>Already subscribed to Notflix?
                    </span>{' '}
                    <Link to="/login">Sign In</Link>
                    </p>
                </form>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Signup;