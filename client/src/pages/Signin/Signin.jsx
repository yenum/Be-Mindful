import React from 'react'
import ideas from '../../images/Ideas.png'
import './Signin.css'

const Signin = () => {
  return (
    <div className='container3'>
       <div className='inner-container3'>
    <div className='form-section'>
          <p className='signin-title'>Sign In</p>
        <form className='form-input'>
                <input placeholder="email address" />
                <input placeholder="password" />
           <button> Sign In </button>
        </form> 

    </div>
      </div>
      <div style={{width:'40%', display:'flex', padding: '0% 2%'}}>
        <img className='ideaimage3'src= {ideas} alt='ideas illustration'/>
    </div>
    
</div>
  )
}

export default Signin