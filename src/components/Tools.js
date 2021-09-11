import React from 'react'
import Tool from '../assets/Images/tools.png'

const Tools = () => {
    return (
        <div className='container'>
            <div className='columns is-centered is-vcentered'>
                <div className='column columns is-centered'>
                    <div className='column is-three-quarters'>
                    <p className='subtitle is-5 mb-6 has-text-white'>
                        Tools
                    </p>
                    <h1 className='title is-1 mt-5 mb-6 has-text-white'>
                        Technology I Use
                    </h1>
                        <div className='columns'>
                            <div className='columns column '>
                                <div className='column'>
                                    <p className='mb-4 has-text-white'>
                                        Front-End
                                    </p>
                                    <div className='has-text-white'>
                                        <p className="is-7 pb-2">HTML</p>
                                        <p className="is-7 pb-2">CSS</p>
                                        <p className="is-7 pb-2">Js</p>
                                        <p className="is-7 pb-2">Bulma</p>
                                        <p className="is-7 pb-2">React</p>
                                    </div>
                                </div>
                                <div className='column has-text-white is-centered'>
                                    <p className='mb-4'>
                                        Back-End
                                    </p>
                                    <div>
                                        <p className="is-7 pb-2">Express.js</p>
                                        <p className="is-7 pb-2">Node.js</p>
                                        <p className="is-7 pb-2">Mongoose</p>
                                        <p className="is-7 pb-2">Postman</p>
                                        <p className="is-7 pb-2">MySql</p>
                                    </div>
                                </div>
                                <div className="column has-text-white">
                                    <p className='mb-4'>Other</p>
                                    <div>
                                        <p className="is-7 pb-2">Powershell</p>
                                        <p className="is-7 pb-2">GitHub</p>
                                        <p className="is-7 pb-2">NPM</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <a href="https://github.com/justinpatterson1?tab=repositories" target="_blank" className="button mt-4 is-link">View Work</a>
                    </div>
                    
                </div>
                <div className='column'>
                    <div>
                        <img style={{height:'100vh', width:'100vw'}} src={Tool} alt="" srcset="" /> 
                    </div>
                   
                </div>
                
            </div>
            
        </div>
    )
}

export default Tools
