import React from 'react';
import SavedMovies from '../components/SavedMovies';


function Account() {
  return (
    <>
    <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/a1f7d402-a554-442d-92e4-3e4be79ae155/US-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
         <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
           <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font bold'>My Movies</h1>
           </div>
         </div>
    </div>
    <SavedMovies />
    </>
  )
}

export default Account;