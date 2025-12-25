import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input className='rounded-md w-full px-3 py-2 border' type="email" placeholder='your@email.com' required/>
                </div>
                 <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input className='rounded-md w-full px-3 py-2 border' type="password" placeholder='Enter your password' required/>
                </div>
                <button className='bg-gray-700 text-white border rounded-xl w-1/4 cursor-pointer hover:bg-gray-100 hover:text-gray-700 duration-300' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login