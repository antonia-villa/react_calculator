import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      total:0,
      num1:'',
      num2:''
    };
    this.addNum1 = this.addNum1.bind(this);
    this.addNum2 = this.addNum2.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }


  addNum1(event){
    let num =  Number(event.target.value)
    let temp =  Number(this.state.total) + num
    this.setState({total: temp, num1: num});
  }

   addNum2(event){
    let num =  Number(event.target.value)
    let temp =  Number(this.state.total) + num
    this.setState({total: temp, num2: num});
  }

  resetValue(){
    this.setState({total : 0})
    this.setState({num1: ''})
    this.setState({num2: ''})
    
  }

  render() {
    return (
      <div className="container">
      <h1> Time to calculate how broke you are: </h1>
        <div class="add formContainer">
            <input type="number"  id="num1" value ={this.state.num1} onChange={this.addNum1} />
            <span>+</span>
            <input type="number" id="num2" value ={this.state.num2} onChange={this.addNum2} />
            <span>=</span>
            <h3>Addition results go here!: {this.state.total}</h3>
            <button onClick = {this.resetValue}> Reset the Value! </button>
        </div>
      </div>
    );
  }
}

export default App;
