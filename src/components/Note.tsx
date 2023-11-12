import { MdDeleteForever } from "react-icons/md"

interface NoteProps {
  id: string
  text: string
  date: string
  handleDeleteNote: (id: string) => void
}

const Note = ({ id, text, date, handleDeleteNote }: NoteProps) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever size={"1.3em"} className="delete-icon" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  )
}

export default Note
