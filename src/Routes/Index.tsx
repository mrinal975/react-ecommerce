import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default index;
