import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";
import axios from "axios";

function App(){
    const BACKEND_SERVER = import.meta.env.VITE_BACKEND_ENDPOINT
    const [notes, setNotes] = useState([]);

    const fetchData = async() =>{
        try{
            const response = await axios.get(BACKEND_SERVER + '/get_notes');
            setNotes(response.data)
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function addNote(titleText, contentText) {
        try{
            let body = {
                "title": titleText,
                "content": contentText
            }
            const response = await axios.post(BACKEND_SERVER + '/add_note', body);
            console.log(response.data)
            setNotes([...notes, response.data]);
        }catch(err){
            console.log(err)
        };
    };

    async function deleteNote(id){
        try{
            const response = await axios.delete(BACKEND_SERVER + `/delete_note/${id}`)
            fetchData();
        }catch(err){
            console.log(err)
        };
    };

    async function updateNote(id, title, content) {
        try{
            let body = {
                "title": title,
                "content": content
            }
            const response = await axios.put(BACKEND_SERVER + `/update_note/${id}`, body)
            fetchData();
        }catch(err){
            console.log(err)
        };
    }

    return <div>
                <Header/>
                <CreateNote addNote={addNote}/>
                <Footer/>
                {notes.map((note, index)=>(
                    <Note key={note._id.toString()} id={note._id.toString()} title={note.title} content={note.content} onDelete={deleteNote} onUpdate={updateNote}/>
                ))}
            </div>
    
};

export default App;