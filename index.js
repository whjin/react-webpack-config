import React from 'react';
import ReactDOM from 'react-dom';

let element = <div>
  <h1>Hello, React!</h1>
  <p>webpack-dev-server刷新速度太慢</p>
  <input type="text" value="nameasdasd"/>
  <input type="submit" value="Click"/>
</div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

