import React from 'react'
import JustinDevLogo from "../assets/Images/mylogo.png"

const Navbar = () => {
    return (

        <nav id="nav-bar" className="navbar">
           <div className="container">
            <div  className="navbar-menu">
                <div className="navbar-brand">
                    <h1 className="has-text-white navbar-item is-size-2">JustinDev</h1>
                </div>
                <div className="navbar-end">
                    <a className="p-3 m-4  is-centered has-text-danger-light" href="">About Me</a>
                    <a className="p-3 m-4  is-centered has-text-danger-light" href="">Skills</a>
                    <a className="p-3 m-4  is-centered has-text-danger-light" href="">Services</a>
                    <a className="p-3 m-4  is-centered has-text-danger-light" href="">Projects</a>
                    <a className="p-3 m-4  is-centered has-text-danger-light" href="">Contact Me</a>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
