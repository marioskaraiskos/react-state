import './App.css';
import React from 'react';
import NewComp from './Components/NewComp';

class App extends React.Component {

  styles = {
    color: 'blue',
    fontSize: 'bold'
  }
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome!</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
