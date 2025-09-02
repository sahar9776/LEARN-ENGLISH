import { Link } from "react-router-dom";
import { footerList } from "../asstes/data/db";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="w-full h-96 lg:h-56 overflow-hidden relative">
      <div className="w-full h-full bg-secondary/90 lg:bg-secondary absolute top-0 lg:-top-10 -left-20 lg:-left-[600px] -rotate-45 z-10" />
      <div className="w-full h-full bg-primary/90 lg:bg-primary absolute top-0 lg:-top-10 -right-20 lg:-right-[600px] rotate-45 z-10" />

      <div
      className="container mx-auto text-center absolute top-[50%] -translate-y-[50%]
      left-[50%] -translate-x-[50%] z-50 flex flex-col lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-[40%] h-1/2 flex justify-center
         lg:justify-start lg:border-l-2 lg:border-gold">
          <Logo />
        </div>

        <div className="w-full g:w-[60%] h-1/2 flex flex-col lg:flex-row items-center justify-center gap-2.5 lg:gap-5 lg:pr-10 lg:mt-2">
          {footerList.map((item) => (
            <Link key={item.id} to={item.url}
              className="font-semibold text-lg lg:text-2xl text-white lg:text-black/85 pb-1.5
              border-b-2 border-transparent duration-700 ease-linear
             hover:text-secondary hover:border-secondary lg:hover:text-primary lg:hover:border-primary">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
