import React, { Component } from 'react'
import Button from '../Button/Button'
import { browserHistory } from 'react-router'
import { notEqual } from 'assert';

class NoteHeader extends Component {
  renter() {
    return(
      <div className="NoteHeader">
        <h1 className="NoteHeader-title">
          {note.title}
        </h1>
        <div className="NoteHeader-meta">
          <span className="NoteHeader-author"><img src="/assets/user.svg" width="24" height="24" />{note.user}</span>
          <span className="NoteHeader-updated">{note.updated}</span>
        </div>
        <div className="NoteHeader-buttons">
          <Button hidden={!this.isOwn()} onClick={(() => this.handleClickEdit())}>Edit</Button>
          {/* StartButton component */}
        </div>
      </div>
    )
  }
}