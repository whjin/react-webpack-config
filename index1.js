import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HelloTitle extends Component {
  render() {
    return <h1>Hello,{this.props.name}!</h1>
  }
}

class HelloDiv extends Component {
  render() {
    return <div><HelloTitle name={this.props.name}/></div>
  }
}

ReactDOM.render(
  <HelloDiv name="React"/>,
  document.getElementById('root')
);





