import React, { Component } from 'react'
import marked from 'marked'

class NoteBody extends Component {
  render() {
    return(
      <div
        className="NoteBody"
        dangerouslySetInnerHTML={{ __html: marked(this.props.body) }}
       />
    )
  }
 }

export default NoteBody