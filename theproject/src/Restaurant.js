import react from 'react'
import './Restaurant.css'
import fruitbowl from './fruit-bowl.jpg'


function Restaurant() {
    return <div id="login-box">
        <div class="left">
          <h1>Give Food</h1>
          
          <input type="text" name="username" placeholder="Restaurant Name" />
          <input type="text" name="email" placeholder="Address"/>
          <input type="text" name="email" placeholder="Food Item"/>
          <input type="text" name="email" placeholder="Number of meals giving" />
          
          <input type="submit" name="signup_submit" value="Give" />
        </div>

        <img className="right" src={fruitbowl}/>
    </div>
}

export default Restaurant