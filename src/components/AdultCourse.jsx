import { IoIosArrowDown } from "react-icons/io";
import { adultCourseList } from "../asstes/data/db";
import adultPicure from "../asstes/imges/adultPic.jpg";
import MotionTitle from "../components/MotionTitle";
import Title from "../components/Title";

function AdultCourse() {
  const titleString = "دوره مستری زبان انگلیسی ویژه بزرگسالان";
  const content = "مسیری کامل برای تسلط بر مهارت های چهارگانه زبان انگلیسی";
  const contentTwo = " Speaking, Listening, Reading, Writing";

  return (
    <div
      className="w-full h-auto my-8 lg:my-16 overflow-hidden"
      id="AdultCourse"
    >
      <div className="w-auto h-auto rounded-lg text-center">
        <MotionTitle
          title={titleString}
          content={content}
          contentTwo={contentTwo}
        />
      </div>

      <div
        className="w-full h-[860px] md:h-[760px] lg:h-[600px] bg-secondary rounded-lg relative
         mt-5 lg:mt-10"
      >
        <img
          src={adultPicure}
          alt="adult Picure"
          className="w-64 lg:w-[560px] h-64 lg:h-[560px] rounded-full
         absolute bottom-[70%] md:bottom-[65%] lg:-bottom-28 left-[50%] -translate-x-[50%] lg:-left-16 lg:translate-x-0 border-8 border-white"
        />

        <div
          className="max-w-full lg:max-w-xl absolute top-80 md:top-64 lg:top-5 
          right-2.5 left-2.5 lg:right-5 p-5 lg:p-10"
        >
          <>
            <p className="font-semibold text-black/85 text-xl lg:text-2xl">
              معرفی دوره :
            </p>
            <p className="text-black/65 text-[16px] lg:text-lg mt-2.5 lg:my-5">
              این دوره ویژه بزرگسالانی طراحی شده است که می خواهند در محیط کاری،
              سفر یا زندگی روزمره انگلیسی را سلیس صحبت کنند. از مکالمه روزمره تا
              مهارت های آکادمیک و حرفه ای، همه چیز در مسیر منظم و کاربردی آموزش
              داده می شود.
            </p>

            <button 
            className="bg-transparent rounded-lg py-1 px-2 lg:py-2 lg:px-4 mt-2.5 md:mt-5
          text-primary/80 font-semibold border-2 border-primary/80 duration-700 ease-linear
          hover:text-white hover:bg-primary "
            >
              ثبت نام در دوره
            </button>
          </>

          <div className="mt-5 lg:mt-10">
            <Title>سرفصل های دوره</Title>

            <ul
              className="w-full lg:max-w-md bg-white/50 rounded-lg mt-5
              [&>li:not(:last-child)]:border-b-2 [&>li:not(:last-child)]:border-white/50"
            >
              {adultCourseList.map((item, index) => {
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
      </div>
    </div>
  );
}

export default AdultCourse;
