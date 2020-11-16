import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import App from './app'

export default class Index extends Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById('root'))
