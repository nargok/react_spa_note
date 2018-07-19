import React, { Component } from 'react'
import { Link } from 'react-router'

class StarredNoteList extends Component {
  render() {
    const list = this.props.notes.map(note => {
      return(
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <div className="page-Stars-title">{note.title}</div>
            <div className="page-Stars-meta">
              <span className="page-Stars-author"><img src="/assets/user.svg" width="16" height="16" />{note.user}</span>
              <span className="page-Stars-updated">{note.updated}</span>
            </div>
          </Link>
        </li>
      )
    })

    return(
      <div className="StarredLinkList">
        <ul>{list}</ul> 
      </div>
    )
  }
}

export default StarredNoteList