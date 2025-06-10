import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Studio from "./Pages/Studio";
import ShowCase from "./Pages/ShowCase";
import SingleBlog from "./components/SingleBlog";
import SingleShowCase from "./components/SingleShowCase";
import ContactUs from "./Pages/ContactUs";
import Popper from "./components/Popper";
import NavBar from "./components/NavBar";
import GenVoice from "./Pages/GenVoice";
import Footer from "./components/Footer";
import SolutionStories from "./Pages/SolutionStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Studio />} />
        <Route path="/showCase" element={<ShowCase />} />
        <Route path="/genVoice" element={<GenVoice />} />
        <Route path="/solution" element={<SolutionStories />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
        <Route path="/singleShowCase" element={<SingleShowCase />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/popper" element={<Popper />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
