import React from 'react'

function LoginForm() {
    return (
        <div>
            <div className='p-5'>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Login
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Sign up
            </button>
        </div>
    )
}

export default LoginForm