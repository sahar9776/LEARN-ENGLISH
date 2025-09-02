import { useState } from "react";
import { roadMapList } from "../asstes/data/db";
import Title from "./Title";
import RoadMapItem from "./RoadMapItem";
import { Link } from "react-router-dom";
import graduationCaps from "../asstes/imges/graduationCaps.png"

function RoadMap() {
  const [filteredStep, setFilterdStep] = useState(
    roadMapList.filter((item) => item.category === "begin")
  );

  const changeSteps = (filterCategory) => {
    const filterDone = roadMapList.filter(
      (item) => item.category === filterCategory
    );
    setFilterdStep(filterDone);
  };

  return (
    <div className="w-full h-auto lg:h-[640px] my-16 lg:my-32" id="roadMap">
      <Title>
        <Link to="/road-map">نقشه راه یادگیری زبان انگلیسی</Link>
      </Title>

      <div className="w-full h-auto lg:h-[560px] rounded-sm mt-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[25%] h-[30%] lg:h-full text-center flex flex-row lg:flex-col">

          <div className="hidden lg:block lg:w-full lg:h-[40%] bg-primary relative">

            <div className="w-44 h-44 bg-transparent rounded-xl rotate-[12deg] absolute top-[50%] -translate-y-[50%]
            left-[50%] -translate-x-[50%] z-10 shadow shadow-secondary/65"/>

            <img
            src={graduationCaps}
            alt="graduation Caps"
            className="w-64 h-64 absolute top-[50%] -translate-y-[50%]
            left-[50%] -translate-x-[50%] z-50" />

          </div>

          <div
            className="w-full h-[160px] lg:h-[60%] bg-secondary flex
           flex-wrap flex-row justify-center lg:flex-col gap-0 lg:gap-10 lg:py-10"
          >
            {roadMapList.map((item) => (
              <button
                key={item.id}
                className="w-1/2 lg:w-full h-1/2 lg:h-auto text-lg lg:text-2xl
                font-semibold text-white"
                onClick={() => changeSteps(item.category)}
              >
                {item.id}. {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[75%] h-[70%] lg:h-full bg-primary/5">
          {filteredStep.map((item) => (
            <RoadMapItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
