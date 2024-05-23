import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FaHome } from 'react-icons/fa'



function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[70px] bg-primary">
      <div className="container h-[70px] flex justify-between items-center">
        {/* title site  */}
        <button className="border-0 bg-transparent text-white text-xl md:text-2xl lg:text-4xl" onClick={() => navigate('/')}>آموزش انگلیسی</button>
        {/* menu  */}
        <div className="flex justify-end items-center">
          {
            window.location.pathname == "/" ? (
              <ul className="flex justify-between">
                <li className='mx-1 md:mx-2'>
                  <Link spy={true} to='Rules' smooth={true} activeClass='activeClass' className='text-sm text-white border-b-2 border-primary lg:text-lg duration-700 hover:border-white'>قواعد</Link>
                </li>
                <li className='mx-1 md:mx-2'>
                  <Link spy={true} to='Times' smooth={true} className='text-sm text-white border-b-2 border-primary lg:text-lg duration-700 hover:border-white'>زمان افعال</Link>
                </li>
                <li className='mx-1 md:mx-2'>
                  <Link spy={true} to='IrregularVerbs' smooth={true} className='text-sm text-white border-b-2 border-primary lg:text-lg duration-700 hover:border-white'>افعال بی قاعده</Link>
                </li>
                <li className='mx-1 md:mx-2'>
                  <Link spy={true} to='FunctionalSentences' smooth={true} className='text-sm text-white border-b-2 border-primary lg:text-lg duration-700 hover:border-white'>جملات کاربردی </Link>
                </li>
              </ul>
            ) : ( <button onClick={() => navigate("/")} className='border-0 bg-transparent'>
                  <FaHome className='text-3xl text-white' />
                </button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header