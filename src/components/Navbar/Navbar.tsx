import { IoMdSearch } from "react-icons/io";

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
              <p className=" font-bold text-xl">Shopsy</p>
            </div>
            <div className="">
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
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
