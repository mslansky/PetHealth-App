import React from 'react';
import './reportpage.css';
import config from '../config';
import {Link} from "react-router-dom";

export default class Reportpage extends React.Component{
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

  handleOnClick(evt){
    evt.preventDefault()
    window.print()
  }
  
  render (){
    return(
    <div className= "reportpage">
      {this.state.diaries.map((diaries, index) => (
        <div className="report-list-diaries">
          <p key="diarydate">Diary Entry Date : {diaries.diarydate}</p>
          <p key="content p">Content from Diary Entry for {diaries.name} :</p>
          <p key="medication">{diaries.medication}</p>
          <p key="weight">{diaries.weight}</p>
          <p key="allergies">{diaries.allergies}</p>
          <p key="body">{diaries.body}</p>
          <p key="other">{diaries.other}</p>
        </div>
      ))}
      <button onClick={this.handleOnClick}>Print Report</button>
      <button><Link to={`/profilepage`}>Back to Pet Profiles</Link></button>
    </div>
    );
  }
}
