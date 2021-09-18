import React from 'react'
import Quote from '../components/Quote'

const Contact = () => {
    return (
        <div id='contact'>
            <div className='container'>
                <div className='columns is-vcentered mt-7'>
                    <div className="column">
                        <p className='has-text-grey-light is-size-6 spacing'>
                            CONTACT
                        </p>
                        <h1 className='has-text-white is-size-1 py-2 '>
                            Contact Us
                        </h1>
                        <p className='has-text-grey-light pb-3 is-size-5'>
                            Feel free to reach out so we can get started!
                        </p>
                        <ul type='circle' className='has-text-grey-light'>
                            <div className='bullet'> 
                                 <div className='bullet-point'></div>
                                 <li className='p-1 is-size-5'>Trinidad and Tobago</li>
                            </div>
                            
                            <div className='bullet'> 
                                 <div className='bullet-point'></div>
                                <li className='p-1 is-size-5'>1-(868)-470-2417</li>
                           </div>

                           <div className='bullet'> 
                                 <div className='bullet-point'></div>
                                <li className='p1 is-size-5'>justin.patterson17@yahoo.com</li>
                           </div>
                            
                        </ul>
                    </div>
                    <div className="column">
                        <div id='form'>
                        <div className="box">
                            <div class="field">
                                <label class="label">Name</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Name"/>
                                    </div>
                             </div>
                                 <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input " type="text" placeholder="Email input" value=""/>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fas fa-exclamation-triangle"></i>
                                        </span>
                                    </div>
                                        {/*<p class="help is-danger">This email is invalid</p>*/}
                                </div>
                                <div class="field">
                                    <label class="label">Subject</label>
                                    <div class="control">
                                        <div  class="select">
                                        <select style={{width:'100%'}}>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Message</label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Textarea"></textarea>
                                    </div>
                                </div>
                                <div class="control">
                                    <button class="button is-fullwidth is-link">Submit</button>
                                </div>
                            
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <Quote/>
        </div>
    )
}

export default Contact
