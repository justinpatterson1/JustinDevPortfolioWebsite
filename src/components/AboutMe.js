import React from 'react'
import image from '../assets/Images/about me.png'
import dependable from '../assets/Images/dependable.png'
import reliability from '../assets/Images/reliability.png'
import quality from '../assets/Images/medal.png'

const AboutMe = () => {
    return (
        
            <div className='box mx-6'>
                <div className='columns is-vcentered'>
                   <div className='column image is-256x256 mt-0'>
                       <img id='aboutMe-pic' className='is-size-1' src={image} alt="" />
                   </div>
                   <div className='column mt-6 p-4'>
                       <p className='has-text-info is-size-5'>
                           About Me
                       </p>
                       <h1 className='title is-1 mt-5 has-text-grey-darker mb-6'>
                           Hello, I'm <br/>Justin Patterson
                       </h1>
                       <p className='subtitle'>
                           I work as an  Information System Support Analyst in Trinidad and Tobago. 
                       </p>
                       <p >
                           I have an intense passion for software development and IT. I am an all rounded developer, however
                           I have a keen interest in backend and front-end development. 
                       </p>
                       <p>
                           I would love to make your ideas a reality
                       </p>
                   </div>
                </div>
                <div className='p-5'>
                    <p className='title pb-4 has-text-centered'>What To Expect From Working With Me?</p>
                    <div className='grid col-3 is-centered'>
                        <div className='align-items-center text-align-center'>
                        <h1 className='subtitle'>Reliablity</h1>
                             <div>
                                 
                                <img className =' ml-6 mt-4 expectationPic' src={reliability} alt="" srcset="" />
                             </div>
                             
                        </div>
                        <div className='align-items-center text-align-center'>
                             <h1 className='subtitle'>Dependability</h1>
                             <div>
                                 <img className ='ml-6 mt-4 expectationPic' src={dependable} alt="" srcset="" />
                             </div>
                             
                        </div>
                        <div className='align-items-center text-align-center'>
                             <h1 className='subtitle'>Quality</h1>
                             <div>
                                <img className ='mt-4 expectationPic' src={quality} alt="" srcset="" />
                             </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default AboutMe
