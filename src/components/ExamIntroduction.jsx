import exam from "../asstes/imges/exam.jpg"

function ExamIntroduction() {
  // const buttonsContent = ["ثبت نام در آزمون های مجازی", "ثبت نام در آزمون های حضوری"]

  return (
    <div className="w-full h-[480px] lg:h-[620px]">
      <div className="w-full h-[480px] bg-primary/90 ">
        <div className="container w-full h-full mx-auto flex flex-col lg:flex-row">

          <div className="w-full lg:w-3/5 h-auto lg:h-full text-start py-8 lg:py-16">
            <h3
              className="text-2xl lg:text-4xl font-semibold text-white">
              آزمون ها
            </h3>

            <p className="lg:max-w-xl text-white/65 text-[16px] lg:text-lg mt-5 lg:my-10">
              آزمون های زبان انگلیسی در سایت ما برای سنجش سطح واقعی شما طراحی شده اند.
              شما می توانید به صورت آنلاین و یا در صورت تمایل حضوری در این آزمون ها شرکت کنید.
              <br />
              در پایان هر آزمون نتیجه و تحلیل عملکرد خود را دریافت می کنی
              تا دقیقا بدانید روی کدام بخش ها باید بیشتر تمرکز کنید .
            </p>

            {/* <div className="w-full h-auto flex flex-col lg:flex-row gap-2.5 lg:gap-5 mt-10 lg:mt-5">
              {
                buttonsContent.map((item, index) => (
                  <button
                    key={index + 1}
                    className="bg-transparent rounded-lg py-3 px-4 
                   text-gold/85 font-semibold border-2 border-gold/85 duration-700 ease-linear
                   hover:text-primary/90 hover:bg-gradient-to-r hover:from-white hover:to-gold"
                  >
                    {item}
                  </button>
                ))
              }

            </div> */}
          </div>

          <div className="hidden lg:block w-full lg:w-2/5 h-full lg:h-full relative">
            <div className="w-5/6 h-full border-gold border-4 rounded-lg absolute 
            -bottom-28 left-[50%] -translate-x-[50%]"/>

            <img
              src={exam}
              alt={exam}
              className="w-5/6 h-full rounded-lg absolute 
            -bottom-[140px] right-0 shadow shadow-black/50"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamIntroduction
