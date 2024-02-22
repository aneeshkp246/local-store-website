import "./App.css";
import NavBar from "./components/Navbar/Nabvar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Contact } from "./components/Pages/Contact";
import { Login } from "./components/Pages/Login";
import {Footer} from "./components/Pages/Footer"
import Nearby  from "./components/Pages/Nearby";
import Cart  from "./components/Pages/Cart";
import {About} from "./components/Pages/About"

function App() {
  return (
    <>
      <Router>
        <NavBar exact="true"/>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/near" element={<NearbyPage />} /> */}
          </Routes>
        </div>
      </Router>
        <Footer/>
    </>
  );
}

export default App;
