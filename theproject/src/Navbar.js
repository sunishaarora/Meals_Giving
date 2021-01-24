import react from 'react'
import Restaurant from './Restaurant';
import './Navbar.css'
import Home from './Home'

function Navbar() {
    return <div id="navigation">
        <a className="btn btn-outline-dark" href="/">Home</a>
        <a className="btn btn-outline-dark" href="/Restaurant">Restaurant</a>
        <a className="btn btn-outline-dark" href="/Charity">Charity</a>
        <a className="btn btn-outline-dark" href="/Drivers">Drivers</a>
    </div>
}
export default Navbar