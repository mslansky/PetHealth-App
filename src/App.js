import './App.css';
import Navbar from './landingpage/landingpage.js'
import Profilepage from './profilepage/profilepage.js'
import Datapage from './datapage/datapage.js'
import Diarypage from './diarypage/diarypage.js'
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
            <Profilepage />
          </Route>
          
          <Route path="/datapage">
            <Datapage />
          </Route>
        
          <Route path="/diarypage">
            <Diarypage />
          </Route>

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
