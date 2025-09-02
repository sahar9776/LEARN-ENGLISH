import { Link } from "react-scroll";
import { navList } from "../asstes/data/db";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react"
import { SidebarMenuContext } from "../context/SidebarMenuContext";
import SidebarMenu from "./SidebarMenu";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarMenuContext)

  return (
    <>
      <SidebarMenu />
      <div className="w-screen max-w-screen h-20 relative">
        <div
          className="min-w-full min-h-full bg-secondary shadow shaodow-secondary
         -rotate-1 absolute top-0 left-0 z-10"
        />
        <div
          className="min-w-full min-h-full bg-primary/90 shadow shaodow-primary
         rotate-1 absolute top-0 right-0 z-20"
        />

        <div
          className="min-w-full min-h-full flex justify-center items-center
         absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30"
        >
          <div className="container flex justify-between items-center">
            <Logo />

            <div>
              <ul className="hidden lg:flex justify-between">
                {navList.map((item) => (
                  <li key={item.id} className="mx-[6px] md:mx-2">
                    <Link
                    to={item.url}
                    smooth={true}
                    className="text-lg lg:text-xl text-white duration-700 border-b-2
                    border-transparent hover:border-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block lg:hidden text-2xl text-gold">
                <IoMdMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
