import { useNavigate } from "react-router-dom";

function CourseItem({ id, englishTitle, persianTitle, image, url }) {
  const navigate = useNavigate()

  const goTo = () => {
    navigate('/courses')

    window.scrollTo({
      top: id * 450,
      behavior: "smooth",
    })
  }
  return (
    <div
      className="w-full h-full rounded-lg border relative"
    >
      <img
        src={image}
        alt={englishTitle}
        className="w-full h-full rounded-lg absolute top-[50%] -translate-y-[50%]
        left-[50%] -translate-x-[50%] z-10 "
      />

      <div
        className="w-[90%] h-20 lg:h-14 bg-black/50 rounded-lg absolute bottom-2 left-[50%]
      -translate-x-[50%] z-50 text-center flex justify-center items-center"
      >
        <button onClick={goTo} className="text-white text-sm md:text-[16px]">
          {persianTitle}
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
