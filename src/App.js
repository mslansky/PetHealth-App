import './App.css';
import Navbar from './landingpage/landingpage.js'
import Profile from './profilepage/profilepage.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <ul>
              <li><Link to="/">PetHealth</Link></li>
              <li><Link to="/profilepage">Tracker</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <Navbar />
          </Route>
          
          <Route path="/profilepage">
            <Profile />
          </Route>

        

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
