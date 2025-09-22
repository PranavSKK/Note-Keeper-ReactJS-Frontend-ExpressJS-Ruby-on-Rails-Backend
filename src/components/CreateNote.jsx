import {React, useState} from "react";
import Note from "./Note";
import { IoMdAdd } from "react-icons/io";

function CreateNote(props){
    const [titleText, setTitle] = useState("")
    const [contentText, setcontentText] = useState("")

    function handleChange(event){
        if(event.target.name === "title"){
            setTitle(event.target.value)
        }else{
            setcontentText(event.target.value)
        }
    };

    return(
        <div>
        <form>
            <input placeholder="Title" name="title" onChange={handleChange} value={titleText}></input>
            <input placeholder="Content" name="content" onChange={handleChange} value={contentText}></input>
            <button type="button" onClick={()=>{props.addNote(titleText, contentText)
                setTitle(""); setcontentText("")
            }}><IoMdAdd size={20}/></button>
        </form>
        </div>
    )
};

export default CreateNote;