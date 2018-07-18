import React, { Component } from 'react'
import classnames from 'classnames'

class Button extends Component {
  render() {
    const className = classnames({
      Button: true,
      'is-large' : this.props.size === 'large'
    })
    return(
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )  
  }
}

export default Button