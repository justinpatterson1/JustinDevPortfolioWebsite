import React from 'react'
import Strings from '../assets/Images/string2.png'

const Quote = () => {
    const BG=
    {
        backgroundImage:`url(${Strings})`,
        backgroundPosition:`100% 50%`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:'100%',
    
        

        

      
        
    }
    return (
        <div>
              <div id='quote'  className="container p-0">
           
                <div className='pt-6 m-6' >
                        <div className=" columns  box box-bgColor p-0 "  style={{height:'350px',borderRadius: '16px' }}>
                            <div style={BG}>  h1</div>
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default Quote
