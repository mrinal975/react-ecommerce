import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Subscribe from "@/components/Subscribe/Subscribe";
import TopProducts from "@/components/TopProducts/TopProducts";
function home() {
  return (
    <>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
    </>
  );
}

export default home;
