import { Route, Routes } from "react-router-dom";
function index() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to home page</h1>} />
    </Routes>
  );
}

export default index;
