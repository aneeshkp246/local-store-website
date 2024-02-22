import "./App.css";
import NavBar from "./components/Navbar/Nabvar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Contact } from "./components/Pages/Contact";
import { Login } from "./components/Pages/Login";
import { Explore } from "./components/Pages/Explore";
import {Footer} from "./components/Pages/Footer"
import Nearby  from "./components/Pages/Nearby";
function App() {
  return (
    <>
      <Router>
        <NavBar exact="true"/>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/explore" element={<Explore />} />
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
