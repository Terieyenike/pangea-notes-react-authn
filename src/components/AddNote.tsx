import { useState, ChangeEvent } from "react";

interface AddNoteProps {
  handleAddNote: (text: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState<string>("");
  const characterLimit = 200;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols={10}
        rows={8}
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" type="submit" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
