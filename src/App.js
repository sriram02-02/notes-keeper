import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

let fresh = true;

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("react-app-theme")
  );

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data") || false
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length >= 0 && !fresh) {
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }
    fresh = false;
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("en-GB"),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>
          <div className="col-10 box body">
            <div className="container">
              <Header handleDarkMode={setDarkMode} />
              <Search handleSearchNote={setSearchText} />
              <NotesList
                notes={notes.filter((note) =>
                  note.text.toLowerCase().includes(searchText)
                )}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

