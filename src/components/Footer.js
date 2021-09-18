import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {TiSocialInstagram} from 'react-icons/ti'

const Footer = () => {
    return (
        <div className='container' >
            <div className='columns is-vcentered  ' style={{height:'400px'}}>
                <div className='columns column is-vcentered mb-0' style={{borderBottom:'2px solid white', height:'400px'}}>
                    <div id='footer' className='grid col-4  column ' >
                        <div className='title'>
                            <p className='has-text-grey-light'>JustinDev</p>
                        </div>
                    
                            <div>
                                <h4 className='is-size-5 mb-4 has-text-grey-light'>Menu</h4>
                                <div className='has-text-white'>
                                    <li className='mb-1'>About</li>
                                    <li className='mb-1'>Services</li>
                                    <li className='mb-1'>Tools</li>
                                    <li className='mb-1'>Projects</li>
                                </div>
                            </div>
                            
                                <div>
                                    <h4 className='is-size-5 mb-4 has-text-grey-light	'>Services</h4>
                                    <div className='has-text-white'>
                                        <li className='mb-1'>Full Stack Development</li>
                                        <li className='mb-1'>SEO</li>
                                        <li className='mb-1'>Data Modeling</li>
                                        <li className='mb-1'>Backend Development</li>
                                        <li className='mb-1'>Front-End Development</li>
                                    </div>
                                </div>
                            
                        
                        <div className='columns'>

                            <div className='social column columns is-centered is-vcentered m-2'><span className='column' style={{fontSize:'25px',textAlign:'center'}}><FaFacebookF/></span></div>
                            <div className='social column columns is-centered is-vcentered m-2'><span className='column' style={{fontSize:'25px',textAlign:'center'}}><FaTwitter/></span></div>
                            <div className='social column columns is-centered is-vcentered m-2'><span className='column' style={{fontSize:'25px',textAlign:'center'}}><TiSocialInstagram/></span></div>
                            
                            
                            
                        </div>
                        
                    </div>
                </div>

                   
            </div>
            <div className='grid col-2 p-4' >
                        <div>
                            <p>Copyright 2021 JustinDev. All Rights Reserved </p>
                        </div>
                        <div className=' grid col-2 is-centered is-vcentered is-half justify-self-right p-0 m-0' style={{width:'400px'}}>
                            <p className=''>Terms of Use</p>
                            <p className=''>Privacy Policy</p>
                        </div>
                    </div>
        </div>
    )
}

export default Footer
