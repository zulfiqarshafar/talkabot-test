import React, { Component } from 'react';
import Banner from './Banner.js';
import ChatButton from './ChatButton.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Banner />
        <ChatButton />
      </div>
    );
  }
}

export default App;
