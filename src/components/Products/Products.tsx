import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

function Products() {
  return (
    <div className="dark:bg-gray-950  pt-14 pb-12">
      <div className="container">
        <div className="flex flex-col items-center pb-10">
          <p className="text-primary text-xl" data-aos="fade-up">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="dark:text-white text-4xl font-bold">
            Top Selling Products
          </h1>
          <p data-aos="fade-up" className="text-sm dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {ProductsData.map((item, key) => (
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={key}
            >
              <img
                src={item.img}
                alt="img"
                className="h-[220px] w-[150px] rounded-md object-cover"
              />
              <p className="font-bold">{item.title}</p>
              <p className="">{item.color}</p>
              <p className="flex items-center">
                <FaStar className="text-yellow-500" />
                <span className="pl-1">{item.rating}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
