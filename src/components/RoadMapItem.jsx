import clockIcon from "../asstes/icons/clock.png";
import targetIcon from "../asstes/icons/target.png";

function RoadMapItem({ id, title, category, target, time, steps }) {
  return (
    <div className="w-full h-full p-5 lg:p-10">
        <h4 className="text-xl lg:text-3xl font-semibold">
          {id}. {title}
        </h4>

      <div className="mt-3 lg:mt-6">
        <div className="flex items-center lg:items-start">
          <img
          src={targetIcon}
          alt="Target Icon"
          className="hidden lg:block w-5 lg:w-10 h-5 lg:h-10 gap-2 lg:-mt-3 -rotate-[105deg]"
        />
          <h4 className=" text-lg lg:text-xl text-start text-black/60">هدف : {target} </h4>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1 lg:gap-4 mt-8">
        {steps.map((item, index) => (
          <div
            key={index + 1}
            className="w-[49%] lg:w-[31%] h-36 shadow shadow-black/50 rounded-lg 
          flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center">
             
              <h4 className="text-lg lg:text-xl text-primary/80">
                {item.step}
              </h4>
            </div>
            <p className="text-sm lg:text-lg text-primary/60 mt-1.5 lg:mt-3">{item.explanation}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 lg:mt-10 flex items-center gap-1">
        <img
          src={clockIcon}
          alt="Clock Icon"
          className="w-4 lg:w-8 h-4 lg:h-8 lg:-mt-2 gap-1 "
        />
        <span className="text-lg lg:text-2xl text-start text-black/60">مدت : {time}</span>
      </div>
    </div>
  );
}

export default RoadMapItem;
