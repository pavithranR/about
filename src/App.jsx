import Topbar from "./components/topbar/Topbar";
import TimelinePR from "./components/timeline/timePR";
import Intro from "./components/intro/Intro"
import Skill from "./components/skills/skill"
// import Portfolio from "./components/portfolio/Portfolio"
import Attainment from "./components/attainment/Attainment"
import ContactPage from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Skill/>
       <TimelinePR/>
       {/* <Portfolio/> */}
       <About/>
       <Attainment/>
       <ContactPage/>
     </div>
    </div>
  );
}

export default App;
