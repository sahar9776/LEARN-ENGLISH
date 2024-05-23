import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import books from '../asstes/imges/books.png'

function Footer() {
    return (
        <div className='w-full h-[400px] py-16 bg-secondary relative overflow-hidden'>
            <div className="container">
                <div className="w-full h-full grid grid-cols-3">
                    {/* right  */}
                    <div className="w-full">
                        <h4 className="text-3xl">نقشه سایت</h4>
                        <ul className="my-2">
                            <li className='my-2'>
                                <Link to='/' className="text-primary border-b-2 border-secondary hover:border-primary">خانه</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/about-us' className='text-primary border-b-2 border-secondary hover:border-primary'>درباره ما</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/rules-details/wordOrder' className='text-primary border-b-2 border-secondary hover:border-primary'>قواعد</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/tense-Verbs' className='text-primary border-b-2 border-secondary hover:border-primary'>زمان افعال</Link>
                            </li>
                        </ul>
                    </div>
                    {/* middle  */}
                    <div className="w-full">
                        <h4 className="text-3xl">راه های ارتباط مستقیم با ما</h4>
                        <ul className="my-2">
                            <li className="my-2">تلفن : ....</li>
                            <li className="my-2">ایمیل : ....</li>
                            <li className="my-2">آدرس : ....</li>
                        </ul>
                    </div>
                    {/* left  */}
                    <Link to='/' className="w-[250px] h-[250px] rounded-full shadow-md shadow-white ms-auto relative">
                        <img src={books} alt="" className="w-full h-auto absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%]" />
                        <p className="text-xl absolute top-[85%] left-[50%] translate-x-[-50%] translate-y-[-85%]">آموزش انگلیسی</p>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[50px] bg-primary absolute bottom-0 flex justify-center items-center">
                <FaTelegramPlane className='text-blue-500 mx-1 text-3xl cursor-pointer' />
                <FaInstagram className='text-red-500 mx-1 text-3xl cursor-pointer' />
                <FaWhatsapp className='text-green-500 mx-1 text-3xl cursor-pointer' />
            </div>
        </div>
    )
}

export default Footer