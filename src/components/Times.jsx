import React from 'react'
import child from '../asstes/imges/child.jpg'
import young from '../asstes/imges/young.jpg'
import old from '../asstes/imges/old.jpg'
import { Link } from 'react-router-dom'

function Times() {
    return (
        <div className="w-[100%] max-w-full h-auto lg:h-[600px] py-16" id='Times'>
            <div className="container">
                <h3>زمان افعال</h3>
                <Link to='/tense-verbs' className="w-full h-auto flex flex-col lg:flex-row lg:h-[480px] py-12">
                    <div className="w-full h-[400px] md:w-[90%] lg:w-[33%] lg:h-full relative bg-white ">
                        <img src={child} alt='' className="w-[100%] h-full border-2 border-secondary rounded-t-lg lg:rounded-none lg:rounded-s-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10" />
                        <p className="w-[80%] lg:w-[50%] h-[40px] text-white bg-primary opacity-50 rounded-e-md flex justify-center items-center absolute top-[70%] right-0 z-20 ">گذشته</p>
                    </div>
                    <div className="w-full h-[400px] md:w-[90%] lg:w-[33%] lg:h-full relative bg-white ">
                        <img src={young} alt='' className="w-[100%] h-full border-2 border-secondary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10" />
                        <p className="w-[80%] lg:w-[50%] h-[40px] text-white bg-primary opacity-50 rounded-e-md flex justify-center items-center absolute top-[70%] right-0 z-20 ">حال</p>
                    </div>
                    <div className="w-full h-[400px] md:w-[90%] lg:w-[33%] lg:h-full relative bg-white ">
                        <img src={old} alt='' className="w-[100%] h-full border-2 border-secondary rounded-b-lg lg:rounded-none lg:rounded-e-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10" />
                        <p className="w-[80%] lg:w-[50%] h-[40px] text-white bg-primary opacity-50 rounded-e-md flex justify-center items-center absolute top-[70%] right-0 z-20 ">آینده</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Times