import { useState } from "react";

const searchData = [
  {
    name: "Fashion",
    image:
      "https://m.media-amazon.com/images/G/01/AMAZON_FASHION/2024/SITE_FLIPS/SP24/BROWSE/TREND_CAROUSEL/TREND_BUTTONDOWNS._SY530_QL85_.jpg",
  },
  {
    name: "Shirt",
    image: "https://m.media-amazon.com/images/I/91lTH0UfyiL._AC_UL320_.jpg",
  },
  {
    name: "T-shirt",
    image: "https://m.media-amazon.com/images/I/71lytY0IoNL._AC_UL320_.jpg",
  },
  {
    name: "pant",
    image: "https://m.media-amazon.com/images/I/71TjjeMBuYL._AC_UL320_.jpg",
  },
  {
    name: "Short",
    image: "https://m.media-amazon.com/images/I/81fkJi+uIiL._AC_UL320_.jpg",
  },
  {
    name: "Short 2",
    image: "https://m.media-amazon.com/images/I/81xR5DygQiL._AC_UL320_.jpg",
  },
];

function SearchBar() {
  const [search, setSearch] = useState("");
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLocaleLowerCase().includes(search))
    .slice(0, 8);

  return (
    <div className="">
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 placeholder-gray-400 
          rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
      </div>
      {/* search drop-down  */}
      <div className=" flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div key={index} className="py-2 px-2 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={item.image} alt="" />
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className=" w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
