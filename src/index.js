import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class SpaNote extends Component {
  render() {
    return (
      <div>Hello SPA!</div>
    )
  }
}

ReactDOM.render(<SpaNote />, document.getElementById('root'));
