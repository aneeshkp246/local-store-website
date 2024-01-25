import "./App.css";
import NavBar from "./components/Navbar/Nabvar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Login } from "./components/Pages/Login";
import { Explore } from "./components/Pages/Explore";
import { NearbyRestaurants } from "./components/Pages/nearby";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/near" element={<NearbyRestaurants />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;