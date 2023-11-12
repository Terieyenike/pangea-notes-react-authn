import Note from "@src/components/Note";
import AddNote from "@src/components/AddNote";

interface NotesListProps {
  notes: {
    id: string;
    text: string;
    date: string;
  }[];
  handleAddNote: (text: string) => void;
  handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} {...note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
