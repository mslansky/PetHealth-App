import React from 'react';
import './App.css';
import Navbar from './landingpage/landingpage.js'
import Profilepage from './profilepage/profilepage.js'
import Datapage from './datapage/datapage.js'
import EntryDatapage from './datapage/entrydatapage.js'
import Diarypage from './diarypage/diarypage.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import config from './config';
import Reportpage from './reportpage/reportpage.js'



export default class App extends React.Component{
  state = {
    profiles: [],
    diaries: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/profiles`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    ])
      .then(([profilesRes]) => {
        if (!profilesRes.ok)
          return profilesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          profilesRes.json(),
        ])
      })
      .then(([profiles]) => {
      
        this.setState({ profiles })
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

  handleDeleteProfile = profileid => {
    this.setState({
      profiles: this.state.profiles.filter(profile => profile.id !== profileid)
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

  render(){

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <ul>
              <li><Link to="/">PetHealth</Link></li>
              <li><Link to="/profilepage">Tracker</Link></li>
            </ul>
            <Navbar />
          </Route>

          <Route path="/profilepage">
            <Profilepage/>
          </Route>
      
          <Route path='/datapage/entry/:diaryid'
          component= {EntryDatapage}
        />
    
        <Route path='/datapage/:petname'
          component= {Datapage}
        />

        <Route path='/diarypage/:petname'
          component= {Diarypage}
        />
        
        <Route path='/reportpage/:petname'
        component={Reportpage}
        />


        </Switch>
      </Router>
    
    </div>
  );
  }
}

