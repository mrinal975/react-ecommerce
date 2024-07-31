import "./App.css";
import DefaultLayout from "@/pages/layouts/DefaultLayout";
import Routes from "@/Routes/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <DefaultLayout>
      <Routes />
    </DefaultLayout>
  );
}

export default App;
