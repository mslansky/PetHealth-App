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
      this.setState({diaries: diaries }, 
        () => window.print())
      
    })
    .catch(error => {
      console.error({ error })
    })
  
  }


  
  render (){
    return(
    <div className= "reportpage">
      {this.state.diaries.map((diaries, index) => (
        <div className="report-list-diaries">
          <p>{diaries.diarydate}</p>
          <p>{diaries.medication}</p>
          <p>{diaries.weight}</p>
          <p>{diaries.allergies}</p>
          <p>{diaries.body}</p>
          <p>{diaries.other}</p>
        </div>
      ))}
    </div>
    );
  }
}
