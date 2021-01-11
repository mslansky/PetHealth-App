import React from 'react';
import './aboutpage.css';





export default class Aboutpage extends React.Component{
  render(){

    return(
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

    )
  }
}
