import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HelloTitle extends Component {
  render() {
    return <h1 style={this.props.style}>{this.props.content}</h1>
  }
}

class HelloDiv extends Component {
  render() {
    return <div>
      <HelloTitle content="比较大的字" style={{'fontSize': 18}}/>
      <HelloTitle content="比较小的字" style={{'fontSize': 12}}/>
    </div>
  }
}

ReactDOM.render(
  <HelloDiv/>,
  document.getElementById('root')
);