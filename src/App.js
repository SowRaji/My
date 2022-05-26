import "./App.css";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Homepage";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />


      </Routes>
    </>
  );
}

export default App;
