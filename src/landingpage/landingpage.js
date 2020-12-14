
import React from 'react';
import './landingpage.css';


export default class Navbar extends React.Component{
  render(){
    return(
      <header className="App-header">
      <ul>
        <li><a className="active" href="#home">PetHealth</a></li>
        <li><a href="#contact">Tracker</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="intro-picture">
      <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Man and Woman sitting on couch with dog and cat"/>
      <div className="intro-text">Track Your Best Friend's Health</div> 
      </div>

    <div className="flex">
        <img className="pictures" src="https://images.unsplash.com/photo-1587027077233-c7a2e15825cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80" alt="white fluffy dog"/>
        <img className="pictures" src="https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="bengal cat sitting on wood table"/>
        <img className="pictures" src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="black pug dog with cone from vet"/>
    </div>
      </header>
    );
  }
}