import React from 'react';
import './datapage.css';
import config from '../config';
import ApiContext from '../ApiContext';


export default class Datapage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {medication: false, weight:false, diet:false, allergies:false, body:false, other:false,
    };
    this.toggleMedication = this.toggleMedication.bind(this);
    this.toggleWeight = this.toggleWeight.bind(this);
    this.toggleDiet = this.toggleDiet.bind(this);
    this.toggleAllergies = this.toggleAllergies.bind(this);
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleOther = this.toggleOther.bind(this);
  }

    toggleMedication = ()=>{
      this.setState({
        medication: !this.state.medication
      })
  }

    toggleWeight = ()=>{
      this.setState({
      weight: !this.state.weight
      })
    }

    toggleDiet = ()=>{
      this.setState({
      diet: !this.state.diet
      })
    }

    toggleAllergies = ()=>{
      this.setState({
      allergies: !this.state.allergies
      })
    }

    toggleBody= ()=>{
      this.setState({
      body: !this.state.body
      })
    }

    toggleOther= ()=>{
      this.setState({
      other: !this.state.other
      })
    }


    // add diary
    static defaultProps = {
      history: {
        push: () => { }
      },
    }
    static contextType = ApiContext;

    handleSubmit = e => {
      e.preventDefault()
      const newDiary = {
        medication: e.target['text-medication'].value,
        weight: e.target['text-weight'].value,
        diet: e.target['text-diet'].value,
        allergies: e.target['text-allergies'].value,
        body: e.target['text-body'].value,
        other: e.target['text-other'].value,
      }
      fetch(`${config.API_ENDPOINT}/diaries`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_TOKEN}`
        },
        body: JSON.stringify(newDiary),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(diary => {
          this.context.addDiary(diary)
          this.props.history.push(`/profile/${diary.id}`)
        })
        .catch(error => {
          console.error({ error })
        })
    }




  render(){
    return(
      <div className="datapage">

        <h1>PET NAME HERE</h1>

        <div className="data-inputs">
       
        <div className="input-val-cal">
        <label for="diarydate">Today's Date: </label>
        <input type="date" id="diarydate" name="diarydate"></input>
        </div>
        
        
        <section className="datalinks">

        <span onClick={this.toggleMedication}>+ medications</span>
        <div className="input-val">
        { (() => {
            if(this.state.medication){
              return (<input className="medication" id="text-medication" type="text"/>);
            }
          })()}
        </div>
        
        <span onClick={this.toggleWeight}>+ weight</span>
        <div className="input-val">
        { (() => {
            if(this.state.weight){
              return (<input className="weight" id="text-weight" type="text"/>);
            }
          })()}
        </div>
        
        <span onClick={this.toggleDiet}>+ diet</span>
        <div className="input-val">
        { (() => {
            if(this.state.diet){
              return (<input className="diet" id="text-diet" type="text"/>);
            }
          })()}
        </div>
        

        <span onClick={this.toggleAllergies}>+ allergies</span>
        <div className="input-val">
        { (() => {
            if(this.state.allergies){
              return (<input className="allergies" id="text-allergies" type="text"/>);
            }
          })()}
        </div>

        <span onClick={this.toggleBody}>+ body care</span>
        <div className="input-val">
        { (() => {
            if(this.state.body){
              return (<input className="body" id="text-body" type="text"/>);
            }
          })()}
        </div>

        <span onClick={this.toggleOther}>+ other</span>
        <div className="input-val">
        { (() => {
            if(this.state.other){
              return (<input className="other" id="text-other" type="text"/>);
            }
          })()}
        </div>
    
        </section>

        </div>

        <div className="box-1">
        <div className="btn btn-one">
        <span>SAVE DIARY ENTRY</span>
        </div>
        </div>

      </div>
    );
  }
}
