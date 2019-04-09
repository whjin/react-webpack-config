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
        port: 9000
    },

    "start": "webpack-dev-server --config webpack.config.js" 
    ```