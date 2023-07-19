import Home from './components/Home'
import SocialIcons from './components/SocialIcons'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.scss'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
      <div className="app-container">
        <Navbar />
        <SocialIcons />
        <Home />
        <Skills />
        <Projects/>
        <AboutMe/>
        <Contact/>
        <Footer/>
      </div>
  );
}


export default App
