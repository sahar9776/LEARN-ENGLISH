import Title from "./Title";

import inPersonIcon from "../asstes/icons/inPersonClass.png";
import virtualClassIcon from "../asstes/icons/virtualClass.png";
import SwiperVideos from "./SwiperVideos";
import { videosInfo } from "../asstes/data/db";
import { Link } from "react-router-dom";

const EducationalVideos = () => {
  const classList = [
    {
      id: 1,
      title: "کلاس های حضوری",
      src: inPersonIcon,
      description:
        "این کلاس ها برای افرادی که به دنبال فضای رسمی تر، تمرکز بالا و بازخورد مستقیم هستند مناسب است.",
    },
    {
      id: 2,
      title: "کلاس های مجازی",
      src: virtualClassIcon,
      description:
        "این کلاس ها به شکلی منعطف طراحی شده که همه افراد در هر زمان و مکان بتوانند در کلاس شرکت کنند. ",
    },
  ];

  return (
    <div className="w-full h-auto lg:h-[640px] my-8 lg:my-16 " id="videosLearn">
      <Title>
        <Link to="/videos">ویدیو های آموزشی + نکات طلایی</Link>
      </Title>

      <div className="w-full h-full flex flex-col lg:flex-row py-6 lg:py-12 gap-5 lg:gap-10 ">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
          <p className="text-black/75 text-lg lg:text-xl">
            به پیشنهاد مشاوران آموزشی برای کمک به درک عمیق تر و سریع تر مطالب، ما
            در سایت زبان پلاس مجموعه ای از فیلم های آموزشی را به همراه نکات مهم
            و طلایی برای دانشجویان عزیز آماده کرده ایم.
          </p>

          <div className="flex flex-col md:flex-row lg:flex-col gap-2.5 lg:gap-5 mt-3.5 lg:mt-7">
            {
              videosInfo.map(item => (
                <div className={`${item.id === 1 ? "bg-primary/85" : "bg-secondary/85"}
                 w-full h-48 rounded-lg p-2.5 lg:p-5`}>
                  <h4
                    className={`${item.id === 1 ? "text-secondary" :
                    "text-primary"}
                  w-full lg:max-w-xl text-xl lg:text-2xl font-semibold mx-auto`}
                  >
                    {item.title}
                  </h4>
                  <ul className="px-4 lg:px-8 mt-1.5 lg:mt-3 list-disc">
                    {
                      item.list.map((info, index) => (
                        <li
                        key={index + 1}
                        className="text-sm lg:text-[16px] text-white/75 mt-1 lg:mt-2">{info}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>

        </div>

        <div
        className="w-full lg:w-1/2 h-1/2 lg:h-full 
        flex flex-col lg:justify-center gap-2.5 lg:gap-5"
        >
          <div className="w-full h-full lg:h-[45%] flex flex-col md:flex-row gap-2.5 lg:gap-5">
            {classList.map((item) => (
              <div
                key={item.id}
                className="group w-full lg:w-1/2 h-full text-center shadow shadow-black/50 rounded-lg rounded-bl-none
                   flex flex-col justify-center items-center p-5 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-8 lg:w-16 h-8 lg:h-16 duration-700 group-hover:rotate-[360deg]"
                />
                <h4 className="text-xl lg:text-2xl font-semibold text-primary my-2">
                  {item.title}
                </h4>
                <p className="text-black/65 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-full lg:h-[60%]">
            <SwiperVideos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalVideos;
