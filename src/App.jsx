import About from "./Components/About"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import HeroSection from "./Components/HeroSection"
import MyProjects from "./Components/MyProjects"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"

function App() {

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <HeroSection></HeroSection>
      </div>

      <div id="about">
        <About></About>
      </div>

      <div id="skills">
        <Skills></Skills>
      </div>

      <div>
        <Education></Education>
      </div>

      <div id="projects">
        <MyProjects></MyProjects>
      </div>

      <div id="contact">
        <Contact></Contact>
      </div>

      
    </div>
  )
}

export default App
