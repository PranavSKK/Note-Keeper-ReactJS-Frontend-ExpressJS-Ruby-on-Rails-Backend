import React, {useState} from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function Note(props){
    const [titleNote, settitleNotes] = useState(props.title)
    const [contentNote, setcontentNotes] = useState(props.content)
    const [isEditing, setIsEditing] = useState(false)

    function changes(e){
        if(e.target.name === "title"){
           settitleNotes(e.target.value)                     
        }else{
           setcontentNotes(e.target.value)                     
        }
    };

    return (
            <div className="note">
               {isEditing ? (
                  <div className="form">
                  <input
                     className="input"
                     name="title"
                     onChange={changes}
                     value={titleNote}
                  />
                  <input
                     className="input"
                     name="content"
                     onChange={changes}
                     value={contentNote}
                  />
                  <button
                     onClick={() => {
                        props.onUpdate(props.id, titleNote, contentNote);
                        setIsEditing(false); // exit edit mode
                     }}
                  >
                     Up
                  </button>
                  </div>
               ) : (
                  <>
                  <h1>{titleNote}</h1>
                  <p>{contentNote}</p>
                  <button onClick={() => props.onDelete(props.id)}>
                     <MdDelete size={20} />
                  </button>
                  <button onClick={() => setIsEditing(true)}>
                     <MdEdit size={20} />
                  </button>
                  </>
               )}
            </div>
            );

};

export default Note;