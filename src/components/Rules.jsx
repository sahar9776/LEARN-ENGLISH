import React from 'react'
import RulesItem from './RulesItem';
import { useContext } from 'react';
import { RulesContext } from '../context/RulesContext';
import { motion } from 'framer-motion'
import student from '../asstes/imges/student.jpg'

function Rules() {
    const { rules } = useContext(RulesContext);
    const transition = { duration: 3, type: 'spring' };
    return (
        <div className="w-[100%] h-[800px] py-16" id='Rules'>
            <div className="container">
                {/* title & content  */}
                <div className="w-[100%]">
                    <h3>
                        نکات مهم زبان انگلیسی
                        ( قابل استفاده در هر سطح )
                    </h3>
                    <p className="text-gray-400 my-16">
                        برای یادگیری زبان انگلیسی شاید صدها گرامر و دستور زبان وجود داشته باشد،
                        اما فقط ۵ قانون پایه و اصلی وجود دارد که زبان آموزان با تکیه بر آن می‌توانند به درک درستی
                        از قواعد دستوری زبان انگلیسی، دست یابند. یادگیری گرامرها، قواعد و ساختار یک زبان،
                        یک امر اجتناب ناپذیر برای کسب تسلط کافی بر آن زبان است.
                    </p>
                </div>
                {/* Rules itemes  */}
                <div className="w-[100%] max-w-full flex justify-between">
                    {/* right  */}
                    <div className="w-full lg:w-[50%] h-[450px]">
                        {
                            rules.map(item => (
                                <motion.div
                                    initial= {{ right: '-30%' }}
                                    whileInView={{ right: '0%' }}
                                    transition={transition}
                                    className="relative right-0">
                                    <RulesItem title={item.title} number={item.id} category={item.category} key={item.id} />
                                </motion.div>
                            ))
                        }
                    </div>
                    {/* left  */}
                    <div className="hidden lg:block lg:w-[50%] h-[450px] relative">
                        <img src={student} alt="" className="w-[100%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10" />
                        <motion.p lang="en_US"
                            initial={{ left: '-30%' }}
                            whileInView={{ left: '0%' }}
                            transition={transition}
                            className="text-3xl text-secondary font-semibold uppercase py-5 px-10 bg-white rounded-lg shadow-lg absolute top-[10%] left-[0%] z-20 ">
                            learn english
                        </motion.p>
                        <motion.p lang="en_US"
                            initial={{ right: '-30%' }}
                            whileInView={{ right: '3%' }}
                            transition={transition}
                            className="text-3xl text-secondary font-semibold uppercase py-5 px-10 bg-white rounded-lg shadow-lg absolute top-[60%] right-[3%] z-20 ">
                            british?
                        </motion.p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Rules