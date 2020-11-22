import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import './App.css';

function App() {
  const changeTitle = ClickTitle ();
  return (
    <div className="AppContainer">
      <header>
        <button className="btn" onClick={() => changeTitle("Home")}>Home</button>
        
        <button  className="btn" onClick={() => changeTitle("Contact")}>Contact</button>
      </header>
     <FuncComp initNumber={2}></FuncComp>
     <ClassComp initNumber={2}></ClassComp>
    </div>
  );
} //it's rendering itself


function FuncComp(props){
  const numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  const [_date, setDate] = useState((new Date()).toString());

  // const dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
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

function ClickTitle(){

  const [ title, setTitle ] = useState(null);

  const upTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };



  useEffect(upTitle, [title]);

  return setTitle;

 
 
}


export default App;
