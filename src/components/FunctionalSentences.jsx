import React from 'react'
import hotel from '../asstes/imges/hotel.jpg'
import restaurant from '../asstes/imges/restaurant.jpg'
import fly from '../asstes/imges/fly.jpg'
import { Link } from 'react-router-dom'

function FunctionalSentences() {
  const functionalImage = [
    {
      id: 1,
      title: "جملات و کلمات مربوط به پرواز",
      image: fly,
      category: "fly"
    },
    {
      id: 2,
      title: "جملات و کلمات مربوط به رستوران",
      image: restaurant,
      category: "restaurant"
    },
    {
      id: 3,
      title: "جملات و کلمات مربوط به هتل",
      image: hotel,
      category: "hotel"
    }
  ]
  return (
    <div className="w-[100%] h-auto py-16 " id='FunctionalSentences'>
      <div className="container ">
        <h3>جملات کاربردی</h3>
        <div className="w-full h-[600px] py-3 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto relative">
          <div className=" hidden lg:block w-[170px] h-[170px] bg-secondary rounded-lg -rotate-45 absolute top-[85px] left-[-83px] z-10"></div>
          <div className=" hidden lg:block w-[70px] h-[70px] bg-secondary rounded-lg -rotate-45 absolute top-[-15px] left-[350px] opacity-65 z-10"></div>
          <div className=" hidden lg:block w-[190px] h-[190px] bg-secondary rounded-lg -rotate-45 absolute top-[273px] right-[-25px] opacity-85 z-10"></div>
          {
            functionalImage.map(item => (
              <Link to={`/functional-sentences/${item.category}`} className="group w-full h-[200px] lg:h-[350px] border-2 shadow-md rounded-md cursor-pointer relative flex justify-center items-center text-center bg-white z-20" >
                <img src={item.image} alt="" className="w-full h-full rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                <h4 className="hidden text-2xl w-full h-full bg-slate-500 text-white rounded-md opacity-75 group-hover:flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{item.title}</h4>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FunctionalSentences