import React from 'react';
import './diarypage.css';
import config from '../config';
import {Link} from "react-router-dom";

export default class Diarypage extends React.Component{
  constructor(props) {
    super(props);
    const { petname } = this.props.match.params
    this.petname = petname;
    this.fetchDiaries = this.fetchDiaries.bind(this);

    this.state = {diaries: []}
  }

  componentDidMount(){
  this.fetchDiaries()
  }

  fetchDiaries(){
  fetch(`${config.API_ENDPOINT}/diaries/pet/${this.petname}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_TOKEN}`
    }
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(diaries => {
      this.setState({diaries: diaries })
      
    })
    .catch(error => {
      console.error({ error })
    })
  
  }


  handleClickDelete = evt => {
    evt.preventDefault()
    const diaryid = evt.target.getAttribute('diaryid');
  
    fetch(`${config.API_ENDPOINT}/diaries/${diaryid}`, {
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
        this.fetchDiaries()
        
      })
      .catch(error => {
        console.error({ error })
      })
  }


  render (){
    return(
    <div className="diarypage">

      <div className="flex">
      <img className="pictures" src="https://images.unsplash.com/photo-1552231437-c308abde4526?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="grey sleepy cat"/>
      <img className="pictures" src="https://images.unsplash.com/photo-1586410074293-91d01ca0db5c?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="black and white cat"/>
      <img className="pictures" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="corgi and brown dog running"/>
      </div>

      {this.state.diaries.map((diaries, index) => (
      <div className="diary-card">
        <div className="card">
          <div className="card-body">
            <div className="card-content">
              <span className="card-title">{diaries.name}</span>
              <p>{diaries.diarydate}
              </p>
              </div>
              <div className="card-action">
              <div className="diary-edit"><Link to={`/datapage/entry/${diaries.id}`}>OPEN DIARY PAGE</Link></div>
              <button diaryid={diaries.id} onClick={this.handleClickDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      ))}



    </div>
    );
  }
}
