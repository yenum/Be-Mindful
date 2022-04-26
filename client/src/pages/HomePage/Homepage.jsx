import React from 'react'
import ideaflow from '../../images/Ideaflow.png'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='container'>
        <div className='inner-container'>
            <div className='splash-message'>
                <p className='title'>Idea Pad</p>
                <p className='description'>Keep your brilliant ideas in one place</p>
                <div>
                    <button className='signup' id='button-styles'>Sign Up</button>
                    <button className='signin' id='button-styles'>Sign In</button>
                </div>

            </div>
        </div>
        <div style={{width:'40%', display:'flex'}}>
            <img className='ideaimage'src= {ideaflow} alt='ideas flowing'/>
        </div>
        
    </div>
  
  )
}

export default Homepage