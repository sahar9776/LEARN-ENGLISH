import { inputList } from "../asstes/data/db";
import Input from "../components/Input"

function ExamItem({ title, description, facilities }) {
  return (
    <div className="w-full h-auto lg:h-[480px] py-8 lg:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 h-auto lg:h-full py-4 lg:py-8">
          <h3
            className="text-2xl lg:text-4xl font-semibold text-black/85">
            {title}
          </h3>

          <p className="lg:max-w-xl text-black/65 text-[16px] lg:text-lg mt-2.5 lg:my-5">
            {description}
          </p>

          <ul className="w-full h-auto list-disc px-3.5 lg:px-7">
            {
              facilities.map((item,index)=>(
                <li key={index+1} className="text-black/75 mt-4 lg:mt-8">{item}</li>
              ))
            }
          </ul>
        </div>

        <div className="w-full lg:w-2/5 h-auto lg:h-full p-4 lg:p-8 
        bg-gradient-to-b from-white to-secondary/30 rounded-lg">
          {
            inputList.map(item => (
              <Input key={item.id} type={item.type} placeholder={item.placeholder} />
            ))
          }

          <button
            className="bg-transparent rounded-lg py-3 px-4 mt-5 lg:mt-10
            text-primary/85 font-semibold border-2 border-primary/85 duration-700 ease-linear
            hover:text-white/90 hover:bg-primary"
          >
            ثبت نام در {title}
          </button>
        </div>

      </div>
    </div>
  )
}

export default ExamItem
