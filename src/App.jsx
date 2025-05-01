import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Studio from "./Pages/Studio";
import ShowCase from "./Pages/ShowCase";
import Blog from "./Pages/Blog";
import SingleBlog from "./components/SingleBlog";
import SingleShowCase from "./components/SingleShowCase";
import ContactUs from "./Pages/ContactUs";
import Popper from "./components/Popper";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/showCase" element={<ShowCase />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
        <Route path="/singleShowCase" element={<SingleShowCase />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/popper" element={<Popper />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
