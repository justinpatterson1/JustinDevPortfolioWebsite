import React from 'react'
import String from '../assets/Images/string.png'


const Projects = () => {

    const BG=
    {
        backgroundImage:`url(${String})`,
        backgroundPosition:`40% `,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:'100%',
        width:'1000px',
        
        
    }

    return (
        <div className='has-background-white'>
            <div className="container">
               <div className='pt-6' >
                    <div className=" columns box box-bgColor p-0" style={{height:'350px',borderRadius: '16px'}}>
                        
                        <div id='contact-div' style={{color:"#fff"}}>
                            <div>
                                <p className='is-size-6  '>
                                    Contact
                                </p>
                            </div>
                           
                            <h1 className='is-size-1'>
                                Get In Touch
                            </h1>
                            <p className=' is-size-7'>
                                Feel free to reach out to us so we can get started on your next big idea.
                            </p>
                         </div>

                        <div id='bg-div' className='ml-4 column'>
                            <div style={BG} className=' grid col-1 ml-5'>
                                <div style={{width:'275px'}} className='grid col-1'>
                                     <a className='button contact-btn' href="">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects
