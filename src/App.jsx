import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work  from "./components/work/Work"
import Portfolio from "./components/portfolio/Portfolio"
import Contact  from "./components/contact/Contact"
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/AboutMe";


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <AboutMe/>
        <Portfolio/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
