import React from 'react'
import profilePic from "../assets/Images/profile-img.jpeg"



const AboutMe = () => {
    return (
        <div id="About-me">

            

            <div className="container section ">

                <div className="columns">
                    
                            <div className="column">

                                <span className=" is-size-3">About-Us <hr/></span>
                                
                            </div>
                    </div>

                <div className="columns is-vcentered is-centered">

                    <div className="is-half columns columns is-centered">

                        <div className="box is-fluid p-6 has-background-danger-dark column">

                            <div className="p-6">

                                <div className="columns is-full is-centered is-vcentered">

                                    <div className="column m-6 is-1">

                                        <div className="image is-128x128 ">

                                            <img src={profilePic} alt="" srcset="" className="is-rounded"/>

                                        </div>

                                    </div>

                                </div>
                                
                                    <div className="columns is-centered">

                                        <div className="column">

                                            

                                                    <p className="has-text-centered has-text-white">
                                                        Hello Everyone, My Name is Justin Patterson. I am developer from the Caribbean, Trinidad & Tobago to be exact.
                                                        I have a passion for Web Development and a drive for innovation.
                                                    </p>

                                            
                                            
                                        </div>
                                            
                                    </div>
                            
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutMe;
