import "./App.css";

import Footer from "./components/Footer/footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
