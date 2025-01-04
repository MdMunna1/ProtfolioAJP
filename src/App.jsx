import { Outlet } from "react-router-dom";
import "./App.css";

import Home from "./Component/Home";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-red-950 to-black">
        <Navber />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default App;
