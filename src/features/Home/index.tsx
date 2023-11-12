
import { useState } from "react";
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
          <span className="success">Authenticated</span>
        ) : (
          <span className="warn">Unauthenticated</span>
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
