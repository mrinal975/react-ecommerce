import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5">
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/all-product"}>All Product</Link>
      </li>
      <li>
        <Link to={"/signup"}>signup</Link>
      </li>
      <li>
        <Link to={"/signin"}>signin</Link>
      </li>
      {/* <li>
        <Link to={"/admin"}>admin</Link>
      </li>
      <li>logout</li> */}
      <li>
        <Link to={"/cart"}>cart(0)</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-pink-600 sticky top-0">
      {/* Main */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        {/* Left */}
        <div className="lefy py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white text-2xl text-center">
              E-Product
            </h2>
          </Link>
        </div>
        {/* Right */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
