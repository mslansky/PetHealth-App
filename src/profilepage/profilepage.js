import React from 'react';
import './profilepage.css';


export default class Profile extends React.Component{
  render(){
    return(
      <div className="profile-add">
          <img className="backdrop-cat" src="https://images.unsplash.com/photo-1507150823660-eed1895c23c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cat with treat"/>

          <div className="box-1">
          <div className="btn btn-one">
          <span>ADD PET PROFILE</span>
          </div>
          </div>

          <section>
          <div className="add-profile">
          
          </div>
          </section>

      </div>   
    );
  }
}