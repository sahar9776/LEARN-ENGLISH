import Title from "./Title";
import Content from "./Content";
import CourseItem from "./CourseItem";
import student from "../asstes/imges/student.png";
import { courseList } from "../asstes/data/db";

function Courses() {
  return (
    <div
      className="w-full h-[640px] md:h-[480px] lg:h-[560px] my-8 lg:my-16 rounded-lg overflow-hidden relative
    bg-gradient-to-r from-secondary via-secondary/50 to-white lg:bg-none"
      id="courses"
    >
      <>
        <div
          className="hidden lg:block w-[1000px] h-[1000px] bg-secondary rotate-[140deg] absolute
        -bottom-[480px] -left-[520px] z-10 "
        />

        <div
          className="lg:w-[56%] lg:h-1/2 absolute lg:bottom-32 lg:-left-7 z-50
        flex justify-center items-center"
        >
          <img
            src={student}
            alt="student"
            className="hidden lg:block w-full h-auto"
          />
        </div>
      </>

      <div className="w-full h-auto lg:h-full absolute top-5 lg:top-0 right-0 z-50">
        <Title>
          دوره های آموزشی
        </Title>

        <Content >
          <span className="text-black/75">
            ما در مجموعه آموزشی زبان پلاس دوره هایی را برای همه سنین و در همه سطوح
            آماده کرده ایم تا شما بتوانید زبان انگلیسی را به صورت کاربردی و جذاب
            یاد بگیرید.
          </span>
        </Content>

        <div
          className="w-full lg:w-[60%] h-4/5 flex flex-wrap justify-center lg:justify-between 
         items-start gap-1 lg:gap-0 -ms-1 lg:ms-0 mt-5 lg:mt-10"
        >
          {courseList.map((item) => (
            <div
              key={item.id}
              className="w-[49%] md:w-[32%] h-48 md:h-64 lg:h-[70%] rounded-lg"
            >
              <CourseItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
