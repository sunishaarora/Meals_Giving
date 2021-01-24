import react from 'react'
import Restaurant from './Restaurant';

function Navbar() {
    return <div>
        <h1>This is Nav bar</h1> 
        <a href="/Restaurant">Restaurant</a>
        <br/>
        <a href="/Charity">Charity</a>
        <br/>
        <a href="/Drivers">Drivers</a>
    </div>
}
export default Navbar