import { IoIosArrowDown } from "react-icons/io";
import { teenagersCourseList } from "../asstes/data/db";
import MotionTitle from "../components/MotionTitle";
import Title from "../components/Title";
import Content from "../components/Content";
import Teenagers from "../asstes/imges/Teenagers.png"
import adolescentCourses from "../asstes/imges/adolescentCourses.jpg"

function TeenagersCourse() {
  const title = "دوره کاربردی زبان انگلیسی نوجوانان";
  const content =
    "دوره ای برای یادگیری زبان انگلیسی به صورت کاربردی برای استفاده در مکالمات روزمره";

  const teenagersImages = [
    {
      id: 1,
      url: Teenagers,
      title: "Teenagers"
    },
    {
      id: 2,
      url: adolescentCourses,
      title: "adolescentCourses"
    },
  ]

  return (
    <div
      className="w-full h-auto my-8 lg:my-16 overflow-hidden"
      id="TeenagersCourse"
    >
      <div className="w-auto h-auto rounded-lg text-center">
        <MotionTitle title={title} content={content} />
      </div>

      <div className="w-full h-auto lg:h-[640px] bg-primary rounded-lg flex mt-5 lg:mt-10">
        <div className="w-full lg:w-1/2 h-full p-5 lg:p-10">
          <>
            <Content >
              معرفی دوره :
            </Content>
            <Content >
              این دوره ویژه نوجوانان 12 تا 17 سال طراحی شده است.هدف اصلی این
              دوره تقویت مهارت های چهارگانه، یادگیری زبان انگلیسی به صورت کابردی
              و افزایش اعتماد به نفس برای شرکت در مکالمات انگلیسی است تا
              نوجوانان بتوانند در مدرسه، سفر و آینده شغلی به طور موثر از زبان
              انگلیسی استفاده کنند.
            </Content>

            <button
            className="bg-transparent rounded-lg py-1 px-2 lg:py-2 lg:px-4 mt-2.5 md:mt-5
          text-secondary/80 font-semibold border-2 border-secondary/80 duration-700 ease-linear
          hover:text-white hover:bg-secondary "
            >
              ثبت نام در دوره
            </button>
          </>

          <div className="mt-5 lg:mt-10">
            <Title>سرفصل های دوره</Title>

            <ul
              className="w-full lg:max-w-md bg-white/50 rounded-lg mt-2.5 lg:mt-5
              [&>li:not(:last-child)]:border-b-2 [&>li:not(:last-child)]:border-white/50"
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

        <div className="hidden lg:flex w-1/2 h-full items-center justify-center gap-5 lg:gap-10">
          {teenagersImages.map((item) => (
            <div
              key={item.id}
              className={`${item.id === 1 ? "lg:mt-20" : " lg:-mt-14"
                } w-[32%] h-[85%] rounded-full bg-gradient-to-t from-white to-secondary`}
            >
              {/* <img src={item.url} alt={item.title} className="max-w-full w-auto min-h-full h-auto rounded-t-full" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeenagersCourse;
