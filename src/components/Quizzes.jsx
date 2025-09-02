import { Link } from "react-router-dom";
import { quizzesList } from "../asstes/data/db";
import Title from "./Title";
import textIcon from "../asstes/icons/text.png";

function Quizzes() {
  return (
    <div className="w-full h-auto lg:h-[740px] my-8 lg:my-16" id="quizzes">
      <Title>
        <Link to="/quizzes">آزمون ها</Link>
      </Title>

      <div
        className="w-full lg:w-[85%] h-auto lg:h-[480px] flex flex-col md:flex-row 
      lg:justify-center gap-5 mt-10 mx-auto"
      >
        {quizzesList.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-[49%] h-auto lg:h-full rounded-lg shadow shadow-black/50
          text-center p-5 lg:p-10"
          >
            <h3 className="text-xl lg:text-2xl">{item.title}</h3>
            <p className="text-black/70 mt-4">{item.description}</p>

            <ul className="w-full lg:h-[144px] mt-5">
              {item.facilities.map((value, index) => (
                <li
                  key={index + 1}
                  className="min-w-full text-[16px] my-3 text-black/65"
                >
                  {value}
                </li>
              ))}
            </ul>

            <button
              className="w-full h-[72px] lg:h-16 text-lg lg:text-xl text-primary font-bold
             bg-gradient-to-br from-white to-secondary rounded-lg lg:mt-20"
            >
              ثبت نام در {item.title}
            </button>
          </div>
        ))}
      </div>

      <div
        className="w-full lg:w-[85%] h-auto lg:h-36 rounded-lg border-2 border-primary p-5 lg:p-10
      flex justify-between items-center mx-auto mt-5 text-center"
      >
        <Title>
          <Link to="/quizzes">نتایج و گواهی ها</Link>
        </Title>

        <img
          src={textIcon}
          alt="text Icon"
          className="w-12 lg:w-24 h-12 lg:h-24 -mt-1 lg:-mt-1.5"
        />
      </div>
    </div>
  );
}

export default Quizzes;
