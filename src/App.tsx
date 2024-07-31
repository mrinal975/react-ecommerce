import "./App.css";
import DefaultLayout from "@/pages/layouts/DefaultLayout";
import Routes from "@/Routes/Index";
function App() {
  return (
    <DefaultLayout>
      <Routes />
    </DefaultLayout>
  );
}

export default App;
