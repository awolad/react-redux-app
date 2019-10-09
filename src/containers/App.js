import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
        <HelloWorld name={date.toLocaleTimeString()} />
      </div>
    );
  }
}

export default App;
