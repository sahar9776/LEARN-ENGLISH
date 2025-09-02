import { useContext } from "react"
import { SidebarMenuContext } from "../context/SidebarMenuContext"
import Logo from "./Logo"
import { Link } from "react-scroll"
import { navList } from "../asstes/data/db"
import { IoClose } from "react-icons/io5";

function SidebarMenu() {
  const { isOpen, setIsOpen } = useContext(SidebarMenuContext)

  return (
    <div className={`${isOpen ? "block" : "hidden"}
    w-3/4 md:w-1/2 min-h-screen bg-black/90 fixed right-0 top-0 z-[100] p-5`}>
      <div className="w-full h-auto flex justify-between items-center">
        <Logo />

        <button
          onClick={() => setIsOpen(false)}
          className="text-xl text-white/65 hover:text-white">
          <IoClose />
        </button>
      </div>

      <>
        <ul className="px-5 pb-2.5 border-b-2 border-white/65">
          {navList.map((item) => (
            <li key={item.id} className="my-5">
              <Link
                to={item.url}
                smooth={true}
                className="text-lg lg:text-xl text-white/85 duration-700 hover:text-secondary/85"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="py-5 flex flex-col gap-3">
          <Link to='/' className="flex items-center gap-1 text-lg lg:text-xl 
          text-secondary/85 hover:text- font-semibold">
            {/* <BsQuestionLg className="text-xl" /> */}
            <span>
              پرسش های متداول
            </span>
          </Link>

          <Link to='/' className="flex items-center gap-1 text-lg lg:text-xl 
          text-secondary/85 hover:text- font-semibold">
            {/* <BsChatLeftDotsFill className="text-xl" /> */}
            <span>ارتباط با ما</span>
          </Link>
        </div>
      </>
    </div>
  )
}

export default SidebarMenu
