import React from 'react'
import ideas from '../../images/Ideas.png'
import './Signup.css'


const Signup = () => {
  return (
    <div className='container2'>
       <div className='inner-container2'>
    <div className='form-section'>
          <p className='signup-title'>Sign Up</p>
        <form className='form-input'>
            
                <input placeholder="username" />
                <input placeholder="email address" />
                <input placeholder="password" />
           
           <button> Sign Up </button>
        </form> 

    </div>
      </div>
      <div style={{width:'40%', display:'flex', padding: '0% 2%'}}>
        <img className='ideaimage2'src= {ideas} alt='ideas illustration'/>
    </div>
    
</div>

  )
}

export default Signup