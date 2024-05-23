import React from 'react'
import passport from '../asstes/imges/passport.jpg'
import traveler from '../asstes/imges/traveler.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Banner() {
    const transition={duration: 2, type: 'spring' };
    return (
        <div className="w-[100%] h-[600px] py-16">
            <div className="container flex justify-between">
                {/* right  */}
                <div className="w-full lg:w-[50%] h-[400px] py-10">
                    <h1 className="text-primary text-5xl">یادگیری ساده زبان انگلیسی</h1>
                    <p className="text-gray-400 my-16">
                        این سایت برای افرادی مناسب است که حداقل های زبان انگلیسی
                        و یک سری از کلمات را قبلا در حد متوسط یاد گرفته باشند سعی در این است که
                        مکالمات و جملات کاربردی مهم را به افراد به صورت رایگان آموزش دهیم 
                        <br />
                        <span className="font-bold text-2xl text-gray-700">نکته خودمونی : </span>
                         . در این سایت به شدت تلاش شده که همه چی خلاصه ساده و صریح بدون زیاده گویی گفته بشه 
                         پس اگه چیزی کم بود یا نصفه گفته شده بود یعنی تو نیاز به تلاش بیشتر و
                         چند تا سرچ کوچولو داری .  
                    </p>
                    <Link to="/about-us" className="text-secondary bg-white text-2xl border-2 border-secondary py-1 px-10 rounded-xl duration-700 hover:bg-secondary hover:text-white">درباره ما</Link>
                </div>
                {/* left  */}
                <div className="hidden lg:block lg:w-[50%] h-[600px] relative">
                    {/* image traveler */}
                    <motion.img
                    initial={{ left: '12%' }}
                    whileInView={{ left: '0%' }}
                    transition={transition}
                    src={traveler} alt="" className="w-[70%] h-auto rounded-lg absolute top-[0%] left-[0%] z-10 rotate-6 " />
                    {/* image passport */}
                    <motion.img
                    initial={{ left: '-24%' }}
                    whileInView={{ left: '-12%' }}
                    transition={transition}
                    src={passport} alt="" className="w-[40%] h-auto rounded-lg absolute top-[45%] left-[-12%] z-20 -rotate-12 " />
                </div>
            </div>
        </div>
    )
}

export default Banner