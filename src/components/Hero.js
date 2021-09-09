import React from 'react'
import image from '../assets/Images/undraw_programming_2svr.svg'

const Hero = () => {
    return (
        <div id='hero' className='columns is-centered is-vcentered '>
            <div className='column columns is-5 is-centered '>
                <div className='column is-three-quarters pl-5'>
                    <p className='is-size-5 has-text-grey pb-1'><u>Intro</u></p>
                    <h1 className='is-size-1 has-text-white'>
                        Hello World
                    </h1>
                    <h1 className='is-size-3 has-text-white'>
                        My Name is Justin
                    </h1>
                    <p className='has-text-grey'>
                        I am software developer from Trinidad and Tobago. I ready to make your ideas come to life.
                    </p>
                    <a className='button has-background-link-dark is-normal is-link mt-6' href="">Get Started</a>
                </div>
            </div>
            <div className='column is-6'>
                    <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Hero
