import React, {useState} from 'react'
import ideas from '../../images/Ideas.png'
import './Signin.css'

const Signin = () => {

  const [errMessage, seterrMessage] = useState(false)
  const [emailAddress, setEmailAdress] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='container3'>
       <div className='inner-container3'>
    <div className='form-section'>
          <p className='signin-title'>Sign In</p>
        <form className='form-input'>
                <input  placeholder="email address" value={emailAddress} onChange={(e) => setEmailAdress(e.target.value)} />
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
           <button disabled={!emailAddress || !password}> Sign In </button>
            <span data-testid='error' style={{color:'red', visibility: errMessage ? 'visible' : 'hidden'}} >Something went wrong</span>
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