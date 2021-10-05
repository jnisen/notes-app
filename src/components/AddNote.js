import { useState } from 'react'

const AddNote = ({ handleAddNote }) => {

    const characterLimit = 200;
    const [noteText, setNoteText] = useState('');

    const handleChange = (e) => {
        if (e.target.value.length <= characterLimit) {
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        } else {
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="8"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaning</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote