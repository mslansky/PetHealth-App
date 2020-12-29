import React from 'react'
import ProfileForm from './profileform';
import './createprofile.css';
import config from '../config';
import ApiContext from '../ApiContext';



export default class Createprofile extends React.Component{
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const profile = {
      name: e.target['profile-name'].value
    }

    fetch(`${config.API_ENDPOINT}/profiles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_TOKEN}`
      },
      body: JSON.stringify(profile),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(profile => {
        this.context.addProfile(profile)
        this.props.history.push(`/profiles/${profile.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

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
