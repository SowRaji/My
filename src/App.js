import "./App.css";
import React,{useState} from 'react'
import Main from "./Components/Main/Main";
// import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Homepage";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";
import { ThemeProvider } from "./Components/Theme/Theme";


function App() {
  const [actComp, setActComp] = useState("Home")
  const [mounted, setMounted] = useState("")
  const [theme, setTheme] = useState('light');

  function setActive(CompName){
    setActComp(CompName)
  }
  function setmountOrunmount(comMount){
    return()=>(setMounted(comMount))
  }
  function toggleTheme(){
    if(theme === 'light'){
      setTheme('dark');
    }else{  
      setTheme('light');
    }
  }
  return (
<ThemeProvider value={{theme, toggleTheme}}>
    <div className={`cover ${actComp} ${mounted}_mounted`}>
      <Main setActive={setActive}/>
      {/* <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}

      {actComp === "Home" ? <Home setmountOrunmount={()=>setmountOrunmount}/> : <></>}
      {actComp === "Projects" ? <Projects setmountOrunmount={()=>setmountOrunmount}/> : <></>}
      {actComp === "Contact" ? <Contact setmountOrunmount={()=>setmountOrunmount}/> : <></>}
      {actComp === "About" ? <About setmountOrunmount={()=>setmountOrunmount}/> : <></>}

    </div>
    </ThemeProvider>
  );
}

export default App;
