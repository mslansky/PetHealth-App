import React from 'react';
import './datapage.css';
import config from '../config';
import ApiContext from '../ApiContext';


export default class Datapage extends React.Component{
  constructor(props) {
    super(props);
    const { petname } = this.props.match.params
    this.petname = petname;
    
    this.state = {togglemedication: false, toggleweight:false, togglediet:false, toggleallergies:false, togglebody:false, toggleother:false,
    diarydate:"", medication:"", weight:"", diet:"", allergies:"", body:"", other:""};

    this.toggleMedication = this.toggleMedication.bind(this);
    this.toggleWeight = this.toggleWeight.bind(this);
    this.toggleDiet = this.toggleDiet.bind(this);
    this.toggleAllergies = this.toggleAllergies.bind(this);
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleOther = this.toggleOther.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMedication = this.handleChangeMedication.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeDiet = this.handleChangeDiet.bind(this);
    this.handleChangeAllergies = this.handleChangeAllergies.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeOther = this.handleChangeOther.bind(this);
  }

    toggleMedication = ()=>{
      this.setState({
        togglemedication: !this.state.togglemedication
      })
  }

    toggleWeight = ()=>{
      this.setState({
        toggleweight: !this.state.toggleweight
      })
    }

    toggleDiet = ()=>{
      this.setState({
        togglediet: !this.state.togglediet
      })
    }

    toggleAllergies = ()=>{
      this.setState({
        toggleallergies: !this.state.toggleallergies
      })
    }

    toggleBody= ()=>{
      this.setState({
        togglebody: !this.state.togglebody
      })
    }

    toggleOther= ()=>{
      this.setState({
        toggleother: !this.state.toggleother
      })
    }

    // add diary
    static defaultProps = {
      history: {
        push: () => { }
      },
      match: {
        params: {}
      }
    }
    static contextType = ApiContext;

    handleChangeDate (event) {
      this.setState({diarydate:event.target.value});
    }

    handleChangeMedication(event) {
      this.setState({medication: event.target.value});
    }

    handleChangeWeight(event) {
      this.setState({weight: event.target.value});
    }

    handleChangeDiet (event) {
      this.setState({diet: event.target.value});
    }

    handleChangeAllergies (event) {
      this.setState({allergies: event.target.value});
    }

    handleChangeBody (event) {
      this.setState({body: event.target.value});
    }

    handleChangeOther (event) {
      this.setState({other: event.target.value});
    }

    handleSubmit = e => {
      e.preventDefault()
      const newDiary = {
        name: this.petname,
        diarydate: this.state.diarydate,
        medication: this.state.medication,
        weight: this.state.weight,
        diet: this.state.diet,
        allergies: this.state.allergies,
        body: this.state.body,
        other: this.state.other,
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
        .then(diaries => {
          this.context.addDiary(newDiary)
          this.props.history.push(`/diarypage/${this.petname}`)
        })
        .catch(error => {
          console.error({ error })
        })
    }


  render(){
    return(
      <div className="datapage">

        <h1>{this.props.profiles}</h1>

        <div className="data-inputs">
       
        <div className="input-val-cal">
        <label htmlFor="diarydate">Today's Date: </label>
        <input type="date" id="diarydate" name="diarydate" onChange={this.handleChangeDate} value={this.state.diarydate}></input>
        </div>
        
        
        <section className="datalinks">

        <span onClick={this.toggleMedication}>+ medications</span>
        <div className="input-val">
        { (() => {
            if(this.state.togglemedication){
              return (<input className="medication" id="text-medication" type="text" onChange={this.handleChangeMedication} value={this.state.medication}/>);
            }
          })()}
        </div>
        
        <span onClick={this.toggleWeight}>+ weight</span>
        <div className="input-val">
        { (() => {
            if(this.state.toggleweight){
              return (<input className="weight" id="text-weight" type="text" onChange={this.handleChangeWeight} value={this.state.weight}/>);
            }
          })()}
        </div>
        
        <span onClick={this.toggleDiet}>+ diet</span>
        <div className="input-val">
        { (() => {
            if(this.state.togglediet){
              return (<input className="diet" id="text-diet" type="text" onChange={this.handleChangeDiet} value={this.state.diet}/>);
            }
          })()}
        </div>
        

        <span onClick={this.toggleAllergies}>+ allergies</span>
        <div className="input-val">
        { (() => {
            if(this.state.toggleallergies){
              return (<input className="allergies" id="text-allergies" type="text" onChange={this.handleChangeAllergies} value={this.state.allergies}/>);
            }
          })()}
        </div>

        <span onClick={this.toggleBody}>+ body care</span>
        <div className="input-val">
        { (() => {
            if(this.state.togglebody){
              return (<input className="body" id="text-body" type="text" onChange={this.handleChangeBody} value={this.state.body}/>);
            }
          })()}
        </div>

        <span onClick={this.toggleOther}>+ other</span>
        <div className="input-val">
        { (() => {
            if(this.state.toggleother){
              return (<input className="other" id="text-other" type="text" onChange={this.handleChangeOther} value={this.state.other}/>);
            }
          })()}
        </div>
    
        </section>

        </div>

        <div className="box-1">
        <div className="btn btn-one" onClick={this.handleSubmit}>
        <span>SAVE DIARY ENTRY</span>
        </div>
        </div>

      </div>
    );
  }
}
