import React from 'react'
import '../assets/css/App.css';

const NavBar = () => {
    return (
        <div className='pt-2'>
            <nav className=''>
               <div className='grid col-3'>
                    <div className='mt-4 pl-5 m-2'>
                        <a className='has-text-white'>
                            JustinDEV
                        </a>
                    </div>
                    <div className='text-align-center '>
                        <li className='nav-links mt-4 mx-5'><a  className='has-text-white' href="">About</a></li>
                        <li className='nav-links mx-5'><a  className='has-text-white' href="">Services</a></li>
                        <li className='nav-links mx-5'><a  className='has-text-white' href="">Tools</a></li>
                        <li className='nav-links mx-5'><a  className='has-text-white' href="">Projects</a></li>
                    </div>
                    <div className='m-2 text-align-right pr-5'>
                        <a id='contact-btn' className='button are-medium is-normal is-outlined has-text-white '>Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
