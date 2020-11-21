import React, { Component } from 'react';
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
  return(
<div className="container">
  <h2>Functional Style Component</h2>
  <p>Number: {props.initNumber}</p>
</div>    
  );
}

class ClassComp extends Component{
  state = {
    number:this.props.initNumber
  }
  render(){
    return(
      <div className="container">
        <h2>Class style Component</h2>
        <p>Number:  {this.state.number}</p>
        <input type="button" value="random"
         onClick={function(){
           this.setState({number:(Math.random()*100)})}.bind(this)}></input>
      </div>
    )

  };

}

export default App;
