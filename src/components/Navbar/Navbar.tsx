import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

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
               border border-gray-300 rounded-full px-2 focus:outline-none focus:border-1 focus:border-primary"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
