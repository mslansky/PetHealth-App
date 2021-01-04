import React from 'react';
import Createprofile from './createprofile';
import './profilepage.css';
import config from '../config';
import ApiContext from '../ApiContext';
import {Link} from "react-router-dom";


export default class Profilepage extends React.Component{
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {isToggleOn: false, profiles: []};
    this.handleClick = this.handleClick.bind(this);
    this.fetchProfile = this.fetchProfile.bind(this);
  }
  static contextType = ApiContext;

  componentDidMount(){
    this.fetchProfile();
  }

  fetchProfile() {
    fetch(`${config.API_ENDPOINT}/profiles`, { headers: {'Authorization': `Bearer ${config.API_TOKEN}`}})
    .then(response => {
      if(!response.ok)
        return response.json().then(e => Promise.reject(e))
      return response.json()
    }).then(profilesJson => {
      console.log(profilesJson)
      this.setState(state => ({
        profiles: profilesJson
      }))
    })
  }


  handleClick() {
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }
  

  static defaultProps ={
    onDeleteProfile: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const profileid = e.target.getAttribute('profile-id');

    fetch(`${config.API_ENDPOINT}/profiles/${profileid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_TOKEN}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteProfile(profileid)
        this.props.onDeleteProfile(profileid)
        this.fetchProfile()
      })
      .catch(error => {
        console.error({ error })
      })
  }


  render(){
    return(

      <div className="profile-add">
          <img className="backdrop-cat" src="https://images.unsplash.com/photo-1507150823660-eed1895c23c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cat with treat"/>
          
          <div class="box-1">
          <div class="btn btn-one" onClick={this.handleClick}>
            <span>CREATE PET PROFILE</span>
          </div>
          </div>
          {this.state.isToggleOn ? <Createprofile fetchProfile={this.fetchProfile}/> : ''}


          
          <container className="profile-list">
          {this.state.profiles.reverse().map((profiles, index) => (
            <div className="profile-bubble">
              <img className="paw" src="https://img.icons8.com/ios-filled/50/000000/cat-footprint.png" alt="small paw print icon"/>
            <p>{profiles.name}</p>
            <div className="three">
            <button className="enter-button">
              <Link to={`/datapage/${profiles.name}`}>Create New Diary</Link>
            </button>
            <button className="delete-profile" profile-id={profiles.id} onClick={this.handleClickDelete}> Delete Pet Profile</button>
            <button className="all-diaries"><Link to={`/diarypage/${profiles.name}`}>View All Diaries</Link></button>
            </div>
            </div>
          ))}
          </container>
       

      </div>   
    );
  }
}
