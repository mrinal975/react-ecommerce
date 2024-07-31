import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

function Navbar() {
  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 
    relative z-40"
    >
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2">
              <img src="/src/assets/logo.png" alt="" className="w-12" />
              <a className=" font-bold text-xl">Shopsy</a>
            </div>
            {/* Search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  className="w-[150px] sm:w-[150px] group-hover:w-[250px] transition-all duration-300
               border border-gray-300 rounded-full px-2 focus:outline-none focus:border-1 focus:border-primary
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               "
                  placeholder="search"
                />
                <IoMdSearch
                  className="absolute top-1/2 -translate-y-1/2 right-1 text-gray-500 group-hover:text-primary
                               transition-all duration-300"
                />
              </div>
              <button className="flex items-center gap-3 group  bg-gradient-to-r from-primary to-secondary rounded-full px-4 transition-all duration-200 py-1">
                <span className="hidden group-hover:block transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* Dark dome */}
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((menu, key) => (
            <li
              className="inline-block px-3 hover:text-primary duration-200"
              key={key}
            >
              <a href={menu.link} className="">
                {menu.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and link */}
          <li className="relative group inline-block px-3 hover:text-primary duration-200">
            <a className="flex items-center gap-[2px] py-2 ">
              Trending Items
              <span>
                <FaCaretDown className="transition-all group-hover:rotate-180 duration-200" />
              </span>
            </a>
            <div
              className="absolute  left-0 hidden group-hover:block z-[999] w-[150px]
             text-black bg-white shadow-md"
            >
              <ul className="">
                {DropdownLinks.map((link, key) => (
                  <li
                    className="px-3 py-2 hover:text-primary duration-200"
                    key={key}
                  >
                    <a
                      href={link.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
