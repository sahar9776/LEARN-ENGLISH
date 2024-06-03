import React, { useContext } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdNoteAlt } from 'react-icons/md'
import { BiSolidOffer } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { SidebarContext } from '../context/SidebarContext';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa'
import { IoBook } from 'react-icons/io5'

function Sidebar() {
    const { sidebarFull, changeSidebar } = useContext(SidebarContext);
    return (
        <div className={`${sidebarFull ? ('w-full px-8 md:w-[38%] lg:w-[320px] lg:px-4') : ('w-[70px] px-1')} mx-auto min-h-[100%] py-5 fixed right-0 top-0 bg-secondary`}>
            {
                sidebarFull ? (
                    <div>
                        <div className="w-full h-14 mx-auto border rounded-lg flex justify-between items-center px-2">
                            <button className={`${!sidebarFull && ('hidden')} w-[30px] h-[30px] rounded-full border flex justify-center items-center`}>
                                <FaUser className=' text-white' />
                            </button>
                            <button onClick={() => changeSidebar(true)} className="">
                                <MdKeyboardArrowRight className='text-2xl text-white' />
                            </button>
                        </div>
                        <div className="w-ful min-h-full mx-auto px-2 py-8">
                            <Link to='' className='flex items-center text-xl mb-5'>
                                <MdNoteAlt className='text-3xl mx-2' />
                                یادداشت های شخصی
                            </Link>
                            <Link to='' className='flex items-center text-xl mb-5'>
                                <IoBook className='text-3xl mx-2' />
                                دوره های آموزشی
                            </Link>
                            <Link to='' className='flex items-center text-xl mb-5'>
                                <BiSolidOffer className='text-3xl mx-2' />
                                پیشنهادات
                            </Link>
                            <Link to='' className='flex items-center text-xl mb-5'>
                                <FaUserFriends className='text-3xl mx-2' />
                                دوستان
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <div className="w-[40px] h-[40px] mx-auto border rounded-full flex justify-center items-center">
                            <button onClick={() => changeSidebar(false)} className="text-center">
                                <MdKeyboardArrowLeft className='text-2xl text-white' />
                            </button>
                        </div>
                        <div className="w-ful min-h-full mx-auto px-2 py-8">
                        <Link to='' className='flex items-center text-xl mb-5'><MdNoteAlt className='text-3xl mx-2' /></Link>
                            <Link to='' className='flex items-center mb-5'><IoBook className='text-3xl mx-2' /></Link>
                            <Link to='' className='flex items-center mb-5'><BiSolidOffer className='text-3xl mx-2' /></Link>
                            <Link to='' className='flex items-center mb-5'><FaUserFriends className='text-3xl mx-2' /></Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar
