import React, {useState} from 'react'
import ideas from '../../images/Ideas.png'
import './Signup.css'


const Signup = () => {
  const [errMessage, seterrMessage] = useState(false)
  const [username, setUsername] = useState('')
  const [emailAddress, setEmailAdress] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='container2'>
       <div className='inner-container2'>
    <div className='form-section'>
          <p className='signup-title'>Sign Up</p>
        <form className='form-input'>
            
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="email address" value={emailAddress} onChange={(e) => setEmailAdress(e.target.value)} />
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
           
           <button disabled={!username|| !emailAddress|| !password}> Sign Up </button>
           <span data-testid='error' style={{color:'red', visibility: errMessage ? 'visible' : 'hidden'}} >Something went wrong</span>
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