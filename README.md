# React项目指导 #

## 1，使用`webpack`需要安装的依赖 ##

1. `webpack`，`webpack-cli`，`react`，`react-dom`
2. `babel-loader`，`@babel/core`，`@babel/preset-env`，`@babel/preset-react`
3. 设置`.babelrc`，`{"presets": ["@babel/preset-env","@babel/preset-react"]}`
4. 设置`scripts`：
   
     ```
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
    ```
5. 设置`webpack-dev-server`：   
    
    ```
    devServer: {
      compress: true,
        port: 9000，
        hot: true
    },

    "start": "webpack-dev-server --config webpack.config.js" 
    ```
6. 设置`performance`：

    ```
    performance: {
      hints: false
    }
    ```

## `Component` ##

1. 基本组件

    ```
    let title = <h1>Hello, world!</h1>
    
    ReactDOM.render(title,document.getElementById('root'))
    ```

2. 动态组件

    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    let displayTime = () => {
      let nowTime = (
        <div>
          <span>现在时间：{new Date().toLocaleTimeString()}</span>
        </div>
      );
      ReactDOM.render(t
        nowTime,
        document.getElementById('root')
      );
    };
    
    setInterval(displayTime, 1000);
    ```

3. `class`组件构建器

    ```
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
    ```

