import '../assets/css/App.css';
import { useState,useContext } from 'react';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills'
import SkillContext from '../context/SkillsContext';
import Services from '../components/Services'



function App() {
  const [skills , setSkills] = useState([
    {
      name:'HTML',
      rate:'html-5.svg'
    },
    {
      name:'CSS',
      rate:'css-3.svg'
    },
    {
      name:'Node.js',
      rate:'nodejs-icon.svg'
    },
    {
      name:'Bulma',
      rate:'bulma.svg'
    },
    
    {
      name:'Express.js',
      rate:'express.svg'
    },
    {
      name:'MySQL',
      rate:'mysql.svg'
    },
    {
      name:'React.js',
      rate:'react.svg'
    },
    {
      name:'Postman',
      rate:'postman-icon.svg'
    },
    {
      name:'GitHub',
      rate:'github-icon.svg'
    },
    {
      name:'Mongoose',
      rate:'mongoose.png'
    },
    {
      name:'Powershell',
      rate:'powershell.svg'
    }
  ])

  return (
    <>
      <Hero/>

      <Navbar/>

      <AboutMe/>

      <SkillContext.Provider value={{skills,setSkills}}>
         <Skills/>
      </SkillContext.Provider>

      <Services/>
    </>
  );
}

export default App;
