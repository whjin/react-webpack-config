import React from 'react';
import ReactDOM from 'react-dom';

//建立一个DOM物件
let element = <h1>Hello, world!</h1>

//使用ReactDOM.render把刚建立的物件element插入目标DOM中
ReactDOM.render(
  element,
  document.getElementById('root')
);

