import React, { Component } from 'react'
import { Container } from 'flux/utils'
import NoteHeader from '../../components/NoteHeader/NoteHeader'
import NoteBody from '../../components/NoteBody/NoteBody'

class Note extends Component {
  // Store関連の処理

  componentDidMount() {
    // 親から渡されたidのノートを取得する
  }

  handleChangeStar(starred) {
    if (starred) {
      // スターをつける
    } else {
      // スターを外す
    }
  }

  render() {
    const note = this.state.note
    if (!note || !note.id) return null

    return (
      <div className="page-Note">
        <NoteHeader note={note} onChangeStar={this.handleChangeStar.bind(this)} />
        <NoteBody body={note.body}/>
      </div>
    )
  }
}

export default Container.create(Note)