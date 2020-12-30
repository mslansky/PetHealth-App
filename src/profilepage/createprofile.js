import React from 'react'
import './createprofile.css';
import config from '../config';
import ApiContext from '../ApiContext';



export default class Createprofile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  handleSubmit = e => {
    e.preventDefault()
    const profile = {
      name: this.state.value
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
        this.props.fetchProfile();
        this.props.history.push(`/profiles/${profile.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
      this.setState({value: ''})
  }



  render(){
  return(
      <div className="add-profile">
      <section className='AddProfile'>
        <div className='field'>
          <label htmlFor='profile-name-input'>
            Pet Name:
          </label>
        <input type='text' id='profile-name-input' name='profile-name' value={this.state.value} onChange={this.handleChange} /> 
        </div>
    
        <div className='buttons'>
        <div className="box-1">
          <div className="btn btn-one" onClick={this.handleSubmit}>
            <span>SAVE PROFILE</span>
        </div>
          </div>
            </div>

      </section>
      </div>

    );
  }
}
