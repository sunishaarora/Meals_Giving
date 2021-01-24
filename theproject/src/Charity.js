import react from 'react'
import './Charity.css'
import kid from './charity.PNG'

function Charity() {
    return <div id="login-box">
        <div class="left">
          <h1>Request Food</h1>
          
          <input type="text" name="username" placeholder="Name of Charity" />
          <input type="text" name="email" placeholder="Address" />
          <input type="text" name="email" placeholder="Number of meals needed" />
          
          <input type="submit" name="signup_submit" value="Request" />
        </div>
        <img className="right" src={kid}/>
    </div>
}

export default Charity