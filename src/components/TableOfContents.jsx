import { Link } from "react-scroll";
import student from "../asstes/imges/student.png";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function TableOfContents({ homeRoad }) {
  return (
    <div className="w-full h-full">
      <img src={student} alt="student" className="w-1/2 h-auto" />
      <div
        className="w-full h-auto lg:h-64 rounded-lg
          shadow shadow-black/50 p-3 lg:p-6"
      >
        <h3 className="text-xl lg:text-2xl text-start flex justify-start items-center gap-1">
          <FaPencilAlt />
          <span className="font-semibold">فهرست مطالب </span>
        </h3>
        <div className="flex flex-col gap-3 my-3">
          {homeRoad.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              spy={true}
              smooth={true}
              className="text-lg lg:text-xl text-black/75 duration-700
                hover:text-black/80  flex justify-start items-center gap-1"
            >
              <FaCheck />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;
