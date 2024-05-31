import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

function LoginBtn() {
    return (
        <Link to='/login' className='border-0 rounded-s-lg bg-secondary fixed left-0 top-[72px] p-4' >
            <FaUser className='text-white text-xl' />
        </Link>
    )
}

export default LoginBtn