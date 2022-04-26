import React from 'react'
import ideaflow from '../../images/Ideaflow.png'

const Homepage = () => {
  return (
    <div style={{display:'flex'}}>
        <div style={{width:'60%'}}>
            <div>
                <p>Idea Pad</p>
                <p>Keep your brilliant ideas in one place</p>
                <div>
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>

            </div>
        </div>
        <div style={{width:'40%'}}>
            <img src= {ideaflow} alt='ideas flowing'/>
        </div>
        
    </div>
  
  )
}

export default Homepage