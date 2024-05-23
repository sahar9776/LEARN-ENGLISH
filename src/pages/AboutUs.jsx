import React from 'react'
import { motion } from 'framer-motion'
import map from '../asstes/imges/map.jpg'
import airplane from '../asstes/imges/airplane.png'
import OtherProjects from '../components/OtherProjects';

function AboutUs() {
    const transition = { duration: 5, type: 'spring' };
    return (
        <div className="w-[100%] h-[600px] py-16">
            <div className="container">
                <div className="flex justify-between">
                    {/* right  */}
                    <div className="w-full lg:w-[50%] h-auto lg:h-[400px] py-10">
                        <h4 className='font-bold text-2xl text-gray-700'> درباره من : </h4>
                        <p className="text-gray-400 my-2">
                            خب در حال حاضر درباره مایی وجود نداره
                            ؛ چون خودم تنهایی این سایتو درست کردم
                            این درباره خودمه من سحر صمدی هستم عاشق جهانگردی و یادگیری و کلی چیزای
                            دیگه، به تازگی کار طراحی سایتو یاد گرفتم
                            برای من طراحی سایت تبدیل شده به یکی از بهترین سرگرمی های روزمره ام
                            من دنبال گرفتن کارآموزی از یک شرکت برنامه نویسی هستم به صورت دورکار
                            البته کسی قبول نمیکنه ، واقعا قبول دارم که سخته اعتماد به یک کارآموز ولی
                            من تلاشمو میکنم و ناامید نمیشم
                            تا وقتی به چیزی که میخوام نرسیدم بیخیال نمیشم شما هم بیخیال رویاهاتون نشید .
                        </p>
                        <h4 className='font-bold text-2xl text-gray-700'> درباره سایت : </h4>
                        <p className="text-gray-400 my-2">
                            درسته که این سایت یک پروژه تمرینیه برای من و شاید شما خواستید از این کدها استفاده کنید ولی بهرحال
                            ؛تو این سایت سعی کردم یک سری جملات کاربردی ، ضرب المثل های پراستفاده و خلاصه چیزای به درد بخورو براتون بیارم
                            دلم نمیخواست یک سایت با مطالب بی ربط به هم درست کنم .
                        </p>
                    </div>
                    {/* left  */}
                    <div className="hidden lg:block lg:w-[50%] h-[600px] relative">
                        {/* image traveler */}
                        <img src={map} alt="" className="w-[85%] h-auto rounded-lg absolute top-[0%] left-[0%] lg:mt-24 xl:mt-0 z-10 " />
                        {/* image passport */}
                        <motion.img
                            initial={{ left: '-24%', top: '25%' }}
                            whileInView={{ left: '60%', top: '16%' }}
                            transition={transition}
                            src={airplane} alt="" className="w-[12%] h-auto absolute top-[16%] left-[60%] z-20 -rotate-12 " />
                    </div>
                </div>
                {/* Other Projects  */}
                <div className="w-full">
                    <OtherProjects />
                </div>
            </div>
        </div>
    )
}

export default AboutUs