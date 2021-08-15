import React from 'react'
import blackProgrammer from "../assets/Images/black-Computer-Engineer.jpg"

const heroBG=
{
    backgroundImage:`url(${blackProgrammer})`,
    backgroundPosition:`top`,
    backgroundSize:`cover`,
    backgroundRepeat:`no-repeat`,
    backgroundAttachment:`local`,
    heigth:'100vh'
}
const Hero = () => {
    return (
        <div style={heroBG} id="hero">
            <div></div>
            <div  className="columns is-vcentered is-centered">
                <div id="hero-greeting" className=" p-6 is-half  column has-background-black-light has-text-centered">
                        <p className="title has-text-centered has-text-primary-light p-2">Hello,My Name Is <span>Justin Patterson</span></p>
                        <p className="subtitle has-text-centered"> Web-Developer/Information Systems Support Analyst.</p>
                 </div>
            </div>
        </div>
    )
}

export default Hero
