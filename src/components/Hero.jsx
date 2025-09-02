import Title from "./Title";
import Content from "./Content";
import harvard from "../asstes/imges/harvard.jpg";
import speakOne from "../asstes/imges/speakOne.jpg";
import speakTwo from "../asstes/imges/speakTwo.jpg";
import target from "../asstes/icons/target.png";

function Hero() {
  const images = [{ title: "speak One", image: speakOne }, { title: "speak Two", image: speakTwo }]

  return (
    <div className="w-full h-[720px] lg:h-[640px] flex flex-col gap-2.5 lg:gap-5 my-8 lg:my-16">

      <div className="w-full h-3/4 flex flex-col gap-2.5 lg:gap-5 lg:flex-row">
        <div className="w-full h-4/6 lg:w-4/6 lg:h-full lg:p-5 relative">
          <img
            src={harvard}
            alt="harvard"
            className="w-full h-full rounded-lg blur-[1px] brightness-[0.4] absolute top-0 left-0 z-10" />

          <div className="w-full h-full px-2.5 lg:px-5 absolute top-[50%] -translate-y-[50%]
           left-[50%] -translate-x-[50%] z-20 text-center flex flex-col justify-center items-center">
            <Title>
              <h1 className="text-white/85">
                به سایت
                <span className="text-gold"> زبان پلاس </span>
                خوش آمدید
              </h1>
            </Title>

            <Content>
              سایت آموزش زبان پلاس با ارائه دوره ها، ویدیوهای آموزشی، آزمون های متنوع
              یادگیری زبان انگلیسی را ساده، جذاب و کاربردی میکند.
            </Content>
          </div>
        </div>

        <div className="w-full h-2/6 lg:w-2/6 lg:h-full flex justify-between lg:flex-col">
          {
            images.map((item, index) => (
              <img
                key={index + 1}
                src={item.image} alt={item.title}
                className="w-[49%] h-full md:h-auto lg:w-full lg:h-[49%] rounded-lg blur-[1px] brightness-[0.4]" />

            ))
          }
        </div>
      </div>


      <div className="w-full h-1/4 bg-primary rounded-lg p-5 lg:p-10
      flex flex-row items-center justify-evenly">
        <h2 className="text-xl md:text-4xl font-semibold text-white/85
         text-center lg:text-start">
          یادگیری
          <span className="text-secondary/85"> زبان </span>
          یعنی نزدیک تر شدن به
          <span className="text-secondary/85"> هدفت </span>
        </h2>

        <img
          src={target}
          alt="Target Icon"
          className="hidden lg:block w-52 h-52 lg:-mt-7 lg:-rotate-6"
        />
      </div>
    </div>
  );
}

export default Hero;
