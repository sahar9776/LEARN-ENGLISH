import React from 'react'
import Cosmetic from '../asstes/imges/Cosmetics.jpg'
import MenClothing from '../asstes/imges/MenClothing.jpg'
import TicTacToe from '../asstes/imges/TicTacToe.jpg'

function OtherProjects() {
    const projects = [
        { id: 1, title: "different Shop", url: "https://github.com/sahar9776/DIFFERENT-SHOP" ,image:MenClothing },
        { id: 2, title: "beauty Shop", url: "https://github.com/sahar9776/BEAUTY-SHOP" ,image:Cosmetic },
        { id: 3, title: "tic tac toe", url: "https://github.com/sahar9776/tic-tac-toe" ,image:TicTacToe },
    ]
    return (
        <div className="w-[100%] h-auto">
            <h3>پروژه های دیگر من</h3>
            <p className="text-gray-400 my-16">
                خب من چندتا پروژه تمرینی دیگه هم انجام دادم امیدوارم به کارتون بیاد اگه دوست داشتید میتونید نگاهی هم به اونا بندازید
            </p>
            <div className="w-full flex flex-col flex-wrap md:flex-row justify-between gap-5 lg:gap-0 lg:[&>*:nth-child(even)]:mt-4">
                {
                    projects.map(item => (
                        <a target='_blank' href={item.url} className="group w-full h-[400px] mx-auto md:w-[48%] md:h-[350px] lg:w-[30%] lg:h-[300px] flex justify-center shadow-md relative" key={item.id}>
                            <img src={item.image} alt="" className="w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] duration-500 group-hover:shadow-lg" />
                            <h4 className="w-[160px] h-[45px] flex justify-center items-center text-3xl text-primary uppercase rotate-90 bg-white opacity-70 absolute top-[50%] right-[-37px] translate-y-[-50%] translate-x-[12%] rounded-sm duration-500 group-hover:opacity-100">{item.title}</h4>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default OtherProjects