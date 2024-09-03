import { Routes , Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar.jsx'
import ShowNotes from './ShowNotes.jsx'
import AddNote from './AddNote.jsx'
import EditNote from './EditNote.jsx'
function App(){
  const [note,setNote] = useState(["This is a demo note (1).","This is a demo note (2).","This is a demo note (3)."])
  return(
    <div className="bg-black">
    <NavBar />
    <Routes>
      <Route path="/" element={
        <ShowNotes note={note} setNote={setNote}/>        
      }/>
      <Route path="/addNote" element={
        <AddNote setNote={setNote} note={note}/>
      } />
      <Route path="/edit/:index" element={
        <EditNote note={note} setNote={setNote} />
      } />
      </Routes>
      </div>
  )
}

export default App;