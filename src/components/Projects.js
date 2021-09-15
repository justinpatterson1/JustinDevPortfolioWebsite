import React from 'react'
import ContactAdvert from '../components/contactAdvert'

const Projects = () => {
    return (
        <div className='has-background-white'>
           <div id='advert-div' className='mb-7'>
               <ContactAdvert/>
           </div>
           <div id='projects'>
                <div className='container mt-7'>
                    <div>
                        <p className='is-size-5 has-text-link'>PROJECTS</p>
                        <h1 className='title margin-top-50 padding-bottom-5'>Latest Projects</h1>
                        <p className='subtitle is-size-6'>Have a look at the projects I have done so far. Can't wait to get started on yours</p>
                    </div>
                    <div className='mt-7'>
                        <div id='filter' className='box has-background-grey-light'>
                            <div  className="grid col-4">
                                <div className="">All Works</div>
                                <div className="">Web Apps</div>
                                <div className="">Web Sites</div>
                                <div className="">Full Stack Applications</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Projects
