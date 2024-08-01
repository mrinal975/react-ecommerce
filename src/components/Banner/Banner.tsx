import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className=" pb-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto  rounded-sm shadow-sm 
              object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-5 sm:pt-0">
            <h1 data-aos="fade-up" className="text-xl font-bold pb-2">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 text-wrap">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-2 ">
              <div data-aos="fade-up" className="flex gap-2 items-center">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="text-sm">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2 items-center">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-violet-400" />
                <p className="text-sm">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2 items-center">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-violet-400" />
                <p className="text-sm">Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2 items-center">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-violet-400" />
                <p className="text-sm">Quality Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
