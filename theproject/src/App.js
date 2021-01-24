import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import Restaurant from './Restaurant';
import Charity from './Charity';
import Drivers from './Drivers';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Route path='/' component={Home} exact/>
        <Route path='/Restaurant' component={Restaurant} exact/>
        <Route path='/Charity' component={Charity} exact/>
        <Route path='/Drivers' component={Drivers} exact/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
