import './App.css';
import Navbar from './landingpage/landingpage.js'
import Profilepage from './profilepage/profilepage.js'
import Datapage from './datapage/datapage.js'
import Diarypage from './diarypage/diarypage.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  state = {
    profiles: [],
    diaries: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/diaries`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}}),
      fetch(`${config.API_ENDPOINT}/profiles`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    ])
      .then(([diariesRes, profilesRes]) => {
        if (!diariesRes.ok)
          return diariesRes.json().then(e => Promise.reject(e))
        if (!profilesRes.ok)
          return profilesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          diariesRes.json(),
          profilesRes.json(),
        ])
      })
      .then(([diaries, profiles]) => {
        this.setState({ diaries, profiles })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddProfile = profile => {
    this.setState({
      profiles: [
        ...this.state.profiles,
        profile
      ]
    })
  }

  handleAddDiary = diary => {
    this.setState({
      diaries: [
        ...this.state.diaries,
        diary
      ]
    })
  }

  handleDeleteDiary = diaryid => {
    this.setState({
      diaries: this.state.diaries.filter(diary => diary.id !== diaryid)
    })
  }



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
