import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Restaurant from './Restaurant';
import Charity from './Charity';
import Drivers from './Drivers';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
          <Route path='/Restaurant' component={Restaurant} exact/>
          <Route path='/Charity' component={Charity} exact/>
          <Route path='/Drivers' component={Drivers} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
