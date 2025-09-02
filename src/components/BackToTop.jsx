import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showTopBtn && (
        <IoIosArrowUp
          className="w-[50px] h-[50px]
            fixed bottom-[20px] right-[20px] bg-slate-400 text-white
            p-[15px] cursor-pointer rounded-md hover:shadow-lg hover:text-slate-400
            hover:bg-white z-50"
          onClick={goToTop}
        />
      )}
    </div>
  );
}

export default BackToTop;
