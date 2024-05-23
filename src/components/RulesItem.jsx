import React from 'react'
import { Link } from 'react-router-dom'

function RulesItem({ title, number, category }) {
    return (
        <div >
            <Link to={`/rules-details/${category}`}>
                <div className="w-[90%] lg:w-[70%] h-[70px] mb-3 group relative">
                    <div className="w-[100%] h-[40px] border-secondary border-2 rounded-lg cursor-pointer absolute top-0 right-[5px] flex justify-center items-center duration-700 group-hover:bg-secondary group-hover:shadow-md">
                        <p className="text-primary group-hover:text-white">{title}</p>
                    </div>
                    <div className="w-[65px] h-[65px] bg-secondary border-secondary border-2 rounded-lg rotate-21 cursor-pointer absolute top-[-10px] right-0 flex justify-center items-center duration-700 group-hover:bg-white">
                        <p className=" text-white text-4xl  font-semibold -rotate-21 group-hover:text-secondary"> {number} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RulesItem