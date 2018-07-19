import React, { Component } from 'react'
import Button from '../Button/Button'

class StarButton extends Component {
  renderStar() {
    return(
      <Button onClick={() => this.props.onChange(true)}>
        <span>Star</span>
        <span className="Star-star">☆</span>
      </Button>
    )
  }

  renderUnStar() {
    return(
      <Button onClick={() => this.props.onChange(false)}>
        <span>Unstar</span>
        <span className="Star-unstar">★</span>
      </Button>
    )
  }

  reunder() {
    return(
      <span>
        {this.props.starred ? this.renderUnstar() : this.renderStar()}
      </span>
    )
  }
}

export default StarButton