import React, { Component } from 'react';
import HelloWorld from '../components/HelloWord';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <>
        <HelloWorld name={date.toLocaleTimeString()} />
      </>
    );
  }
}

export default Home;
