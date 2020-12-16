import React from 'react'
import ProfileForm from './profileform';
import './createprofile.css'


export default class Createprofile extends React.Component{
  handleSubmit = e => {
    e.preventDefault()
    const profile = {
      name: e.target['profile-name'].value
    }}; 

  render(){
  return(
      <div className="add-profile">
      <section className='AddProfile'>
        <ProfileForm onSubmit={this.handleSubmit}>
        <div className='field'>
          <label htmlFor='profile-name-input'>
            Pet Name:
          </label>
        <input type='text' id='profile-name-input' name='profile-name' />
        </div>
    
        <div className='buttons'>
        <div class="box-1">
          <div class="btn btn-one">
            <span>SAVE PROFILE</span>
          </div>
          </div>
        </div>

        </ProfileForm>

      </section>
      </div>


    );
  }
}
