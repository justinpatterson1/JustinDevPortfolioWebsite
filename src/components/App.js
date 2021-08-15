import '../assets/css/App.css';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills'

function App() {
  return (
    <>
      <Hero/>
      <Navbar/>
      <AboutMe/>
      <Skills/>
    </>
  );
}

export default App;
