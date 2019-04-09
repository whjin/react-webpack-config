import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HelloTitle extends Component {
  render() {
    return <h1>Hello,World!</h1>
  }
}

ReactDOM.render(
  <HelloTitle/>,
  document.getElementById('root')
);