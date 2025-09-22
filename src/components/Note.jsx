import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props){
    return <div className="note">
            <h1>
                {props.title}
                <p>
                    {props.content}
                </p>
            </h1>
            <button onClick={()=>props.delete(props.id)}><MdDelete size={20}/></button>
           </div>
};

export default Note;