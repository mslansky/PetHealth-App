import React from 'react';
import './aboutpage.css';





export default class Aboutpage extends React.Component{
  render(){

    return(
      <div className="about-box">
        <div className="about-text-box">
          <p>Welcome to the Pet Health Tracker App! 
            This application has been designed with your best friend's health in mind.
            By creating a pet profile, you can document your pet's health through a series of diary entries.
            These diary entries will be available for you to view, or edit depending on what you need to document.
            You will also be able to print a cumulative report of the diary entries you create, so you can update your vet or keep them for your records!
            Our pets mean the world to us, and thier health is important. This is why the Pet Health Tracker can help!
          </p>
        </div>
      </div>

    )
  }
}
