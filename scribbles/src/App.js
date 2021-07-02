import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState("a new note...")
  const [ showAll, setShowAll ] = useState(true)
  const hook = () => {
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('fulfilled')
      setNotes(response.data)
    })
  }
  useEffect(hook,[])
  console.log('render', notes.length, 'notes')
  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
        <button type="submit">save a note</button>
      </form>
    </div>
  )
}

export default App