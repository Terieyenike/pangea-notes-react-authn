
import { useState, useEffect } from "react";
import { useAuth } from "@pangeacyber/react-auth";
import { nanoid } from "nanoid";
import Search from "@src/components/Search";
import NotesList from "@src/components/NotesList";

interface Note {
  id: string;
  text: string;
  date: string;
}

const Home = () => {
  const { authenticated, user } = useAuth();

  const [notes, setNotes] = useState<Note[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const storedData = localStorage.getItem("notes");
    if (storedData) {
      setNotes(JSON.parse(storedData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const addNote = (text: string) => {
    const date = new Date();
    const newNote: Note = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="home">
      <div style={{ marginBottom: "16px" }}>
        {authenticated ? (
          <span className="success">Welcome, {user?.profile?.first_name}</span>
        ) : (
          <main className="warn">
            <h1>Your Notes, Anywhere</h1>
            <p>Stay organized and keep track of your thoughts with our simple and easy-to-use notes app.</p>
            <span>
              You need to be logged in to use this app.
            </span>
            <img src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="sticky notes" />
          </main>
        )}
      </div>
      {!!user && (
        <div>
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
