import React, { Component } from 'react';
import HelloWorld from '../components/HelloWord';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
        <HelloWorld name={date.toLocaleTimeString()} />
      </div>
    );
  }
}

export default App;
