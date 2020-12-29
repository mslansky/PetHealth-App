import React from 'react';
import Createprofile from './createprofile';
import './profilepage.css';


export default class Profilepage extends React.Component{
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() { console.log(this.state.isToggleOn)
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }));
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
          {this.state.isToggleOn ? <Createprofile/> : ''}


          <container className="profile-list">
          {this.props.profiles}
          </container>

      </div>   
    );
  }
}
