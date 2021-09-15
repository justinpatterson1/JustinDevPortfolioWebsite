import React from 'react'
import Stack from '../assets/Images/stack-exchange-symbol.png'
import Seo from '../assets/Images/seo-search-symbol.png'
import Modeling from '../assets/Images/data-modelling.png'
import frontend from '../assets/Images/web-design.png'
import backend from  '../assets/Images/code.png'

const Services = () => {
    return (
        <div id='services' className='has-background-white '>
            <div className='container pb-6'>
                <div className='has-text-centered pt-6'>
                    <p className='is-size-5 has-text-link mb-5'>Services</p>
                    <p className='title is-size-1 has-text-grey-dark mb-0'>
                        What we do
                    </p>
                    <p className='pt-0'>
                        Have a look at the main services we provide.
                    </p>
                </div>
                <div className='mt-6'>
                    <div className='columns mb-6 is-centered'>
                        <div className='column is-3 columns is-centered has-background-link radius py-4 mr-6'>
                            <div className=''>
                                 <img src={Stack} className='service-image' alt="" srcset="" />
                            </div>
                        </div>
                        <div className='column columns is-half  ml- 4 is-vcentered'>
                            <div className=' has-text-left '>
                                <p className='title has-text-grey-dark'>Full Stack Development</p>
                                <p className='subtitle is-size-6 has-text-grey-light'>Where the visual aspect of your project is integrated with the technical side to create a full application.</p>
                            </div>
                        </div>
                        <div className='column columns is-vcentered is-centered'>
                            <a className='button has-text-link' href=""> Explore</a>
                        </div>
                    </div>
                    <div className='columns mb-6'>
                       <div className='column columns is-centered  has-background-danger radius is-3  mr-6 py-4'>
                           <div className=''>
                             <img src={Seo} className='service-image' alt="" srcset="" />
                           </div>
                            
                        </div>
                        <div className='column columns is-half  ml-4 is-vcentered '>
                       
                                <div  className=' has-text-left '>
                                    <p className='title has-text-grey-dark'>SEO</p>
                                    <p className='subtitle is-size-6 has-text-grey-light' >Your project will be easily seen and accessed by many around the globe allowing.</p>
                                </div>
                             
                        </div>
                        <div className='column columns is-vcentered is-centered'>
                            <a className='button has-text-link' href=""> Explore</a>
                        </div>
                    </div>
                    <div className='columns mb-6'>
                       <div className='column columns is-centered  has-background-link-light radius is-3  mr-6 py-4'>
                           <div className=''>
                             <img src={Modeling} className='service-image' alt="" srcset="" />
                           </div>
                            
                        </div>
                        <div className='column columns is-half  ml-4 is-vcentered '>
                       
                                <div  className=' has-text-left '>
                                    <p className='title has-text-grey-dark'>Data Modeling</p>
                                    <p className=' subtitle is-size-6 has-text-grey-light'>We design and manage databases to help you compensate growth in you business</p>
                                </div>
                             
                        </div>
                        <div className='column columns is-vcentered is-centered'>
                            <a className='button has-text-link' href=""> Explore</a>
                        </div>
                    </div>
                    <div className='columns mb-6'>
                       <div className='column columns is-centered  has-background-success radius is-3  mr-6 py-4'>
                           <div className=''>
                             <img src={backend} className='service-image' alt="" srcset="" />
                           </div>
                            
                        </div>
                        <div className='column columns is-half  ml-4 is-vcentered has-background-caution '>

                            <div  className=' has-text-left '>
                                <p className='title has-text-grey-dark'>Backend Development</p>
                                <p className=' subtitle is-size-6 has-text-grey-light'>We design and manage databases to help you compensate growth in you business</p>
                            </div>
                        </div>
                        <div className='column columns is-vcentered is-centered'>
                            <a className='button has-text-link' href=""> Explore</a>
                        </div>
                    </div>
                    <div className='columns mb-6'>
                       <div className='column columns is-centered  has-background-primary radius is-3  mr-6 py-4'>
                           <div className=''>
                             <img src={frontend} className='service-image' alt="" srcset="" />
                           </div>
                            
                        </div>
                        <div className='column columns is-half  ml-4 is-vcentered has-background-caution'>

                            <div  className=' has-text-left '>
                                <p className='title has-text-grey-dark'>Front-End Development</p>
                                <p className=' subtitle is-size-6 has-text-grey-light'>We design and manage databases to help you compensate growth in you business</p>
                            </div>

                        </div>
                        <div className='column columns is-vcentered is-centered'>
                            <a className='button has-text-link' href=""> Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


