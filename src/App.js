import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { HelloWorld } from './components/hello-world';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      dataFromParent: 'Hello from parent!'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleSubButtonClicked() {
    debugger;
    this.setState({ message: 'Hello from child' });
  }

  handleClick() {
    axios.get('https://api.github.com/users/DrMueller')
      .then(response => {
        this.setState({ message: response.data.login });
      })
      .catch(err => {
        debugger;
      });
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>Message: {this.state.message}</p>
        <HelloWorld dataFromParent={this.state.dataFromParent} onButtonClicked={this.handleSubButtonClicked.bind(this)} />
      </div>
    )
  }
}

export default App;
