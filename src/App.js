import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="AppContainer">
     <FuncComp initNumber={2}></FuncComp>
     <ClassComp initNumber={2}></ClassComp>
    </div>
  );
} //it's rendering itself


function FuncComp(props){
  const numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  const dateState = useState((new Date()).toString());
  let _date = dateState[0];
  let setDate = dateState[1];
  return(
<div className="container">
  <h2>Functional Style Component</h2>
  <p>Number: {number}</p>
  <input type="button" value="random"
         onClick={function(){
           setNumber(Math.random()*100)}}></input>
<p>Date : {_date} </p>
<input type="button" value="new date" onClick={function(){
setDate(new Date().toString())
}}></input>
</div>    
  );
}//do setNumber instead of setState

class ClassComp extends Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  render(){
    return(
      <div className="container">
        <h2>Class style Component</h2>
        <p>Number:  {this.state.number}</p>
        <input type="button" value="random"
         onClick={function(){
           this.setState({number:(Math.random()*100)})}.bind(this)}></input>
        <p>Date : {this.state.date}</p>
      <input type="button" value="New Date"
      onClick={function(){
        this.setState({date:(new Date()).toString()})}
        .bind(this)}></input>
   </div>
    )

  };

}

export default App;
