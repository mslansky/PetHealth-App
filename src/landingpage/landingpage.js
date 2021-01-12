
import React from 'react';
import './landingpage.css';


export default class Navbar extends React.Component{
  render(){
    return(
      <header className="App-header">
      <div className="intro-picture">
      <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Man and Woman sitting on couch with dog and cat"/>
      <div className="intro-text">Track Your Best Friend's Health</div> 
      </div>

    <div className="flex">
        <img className="pictures" src="https://images.unsplash.com/photo-1587027077233-c7a2e15825cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80" alt="white fluffy dog"/>
        <img className="pictures" src="https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="bengal cat sitting on wood table"/>
        <img className="pictures" src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="black pug dog with cone from vet"/>
    </div>

    <div className="about-box">
        <img className="browndog" src="https://images.unsplash.com/photo-1577447281440-0400a5b0b079?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="brown poodle dog in front of brown door"/>
        <div className="about-text-box">
          <div className="about-paragraph">
          <p className="about-font">
            Welcome to the Pet Health Tracker App! 
            This application has been designed with your best friend's health in mind.</p>
            <p>
            By creating a pet profile, you can document your pet's health through a series of diary entries.
            These diary entries will be available for you to view, or edit depending on what you need to document.</p>
            <p>
            You will also be able to print a cumulative report of the diary entries you create, so you can update your vet or keep them for your records!
            Our pets mean the world to us, and thier health is important. This is why the Pet Health Tracker can help!
          </p>
          </div>
        </div>
      </div>
      </header>
    );
  }
}