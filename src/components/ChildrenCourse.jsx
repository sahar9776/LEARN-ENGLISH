import { IoIosArrowDown } from "react-icons/io";
import { teenagersCourseList } from "../asstes/data/db";
import MotionTitle from "../components/MotionTitle";
import Title from "../components/Title";
import BgChildrenCourse from "./BgChildrenCourse";

function ChildrenCourse() {
  const title = "دوره بازی و یادگیری زبان انگلیسی ویژه کودکان"
  const content = "مسیر یادگیری همراه با بازی، آهنگ، داستان، انیمیشن و کاردستی است"

  return (
    <div
      className="w-full h-auto my-8 lg:my-16 overflow-hidden"
      id="ChildrenCourse"
    >
      <div className="w-auto h-auto rounded-lg text-center">
        <MotionTitle title={title} content={content} />
      </div>


      <div className="w-full h-auto lg:h-[640px] bg-secondary rounded-lg flex flex-col-reverse lg:flex-row mt-5 lg:mt-10">
        <div className="w-full lg:w-1/2 h-auto lg:h-full p-5 lg:p-10">
          <>
            <p className="font-semibold text-black/85 text-xl lg:text-2xl">
              معرفی دوره :
            </p>
            <p className="text-black/65 text-[16px] lg:text-lg mt-2.5 lg:my-5">
              ساختار این دوره ویژه کودکان 4 تا 10 سال اس و در هر جلسه لغات را 
              همراه با فلش کارت، آهنگ، بازی گروهی و کاردستی به کودکان یاد میدهیم 
              تا هم سرگرم شوند هم همراه با بازی زبان انگلیسی را یاد بگیرند.
            </p>

            <button
            className="bg-transparent rounded-lg py-1 px-2 lg:py-2 lg:px-4 mt-2.5 md:mt-5
          text-primary/80 font-semibold border-2 border-primary/80 duration-700 ease-linear
          hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-gold "
            >
              ثبت نام در دوره
            </button>
          </>

          <div className="mt-5 lg:mt-10">
            <Title>سرفصل های دوره</Title>

            <ul
              className="w-full lg:max-w-md bg-white/50 rounded-lg mt-2.5 lg:mt-5
              [&>li:not(:last-child)]:border-b-2 [&>li:not(:last-child)]:border-white/50"فرا بگیرند
            >
              {teenagersCourseList.map((item, index) => {
                return (
                  index < 2 && (
                    <li
                      key={index + 1}
                      className="w-full h-16 lg:h-14 flex justify-between items-center
                      px-2 lg:px-4 text-[16px] lg:text-lg text-black/75"
                    >
                      <span>{item}</span>
                      <IoIosArrowDown className=" cursor-pointer" />
                    </li>
                  )
                );
              })}
              <li
                className="w-full h-16 lg:h-14 flex justify-between items-center
                px-2 lg:px-4 text-[16px] lg:text-lg text-black/75"
              >
                <span>...</span>
                <IoIosArrowDown className=" cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center gap-5 lg:gap-10">
          <BgChildrenCourse />
        </div>
      </div>
    </div >
  )
}

export default ChildrenCourse
