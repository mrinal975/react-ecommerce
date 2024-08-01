import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function TopProducts() {
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <div className="container pt-10 pb-10 ">
        <div className="flex flex-col pb-5">
          <p className="text-primary">Trending Products</p>
          <h1 className="text-3xl font-bold pb-1">
            Top Rated Products for you
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {ProductsData.map((item, key) => (
            <div
              data-aos="fade-up"
              className="flex flex-col items-center max-w-[300px] shadow-lg p-5 hover:bg-black/80 hover:text-white dark:bg-gray-800 bg-white dark:hover:bg-primary"
              key={item.id}
            >
              <img
                src={item.img}
                alt="img"
                className="h-[220px] w-[150px] rounded-md object-cover"
              />
              <div className="flex gap-1 items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
              <button className="py-1 bg-primary text-white rounded-full px-4 dark:hover:bg-white dark:hover:text-black ">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
