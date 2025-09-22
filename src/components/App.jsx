import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";
import axios from "axios";

function App(){

    const [notes, setNotes] = useState([]);

    const fetchData = async() =>{
        try{
            const response = await axios.get('http://localhost:3000/get_notes');
            setNotes([response.data])
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function addNote(titleText, contentText) {
        try{
            let body = {}
            body["title"] = titleText
            body["content"] = contentText
            const response = await axios.post('http://localhost:3000/add_note', body);
            setNotes([...notes, response.data]);
        }catch(err){
            console.log(err)
        };
    };

    async function deleteNote(id){
        try{
            const response = await axios.delete(`http://localhost:3000/${id}`)
            fetchData();
        }catch(err){
            console.log(err)
        };
    };

    async function updateNote(id, titleText, contentText) {
        try{
            let body = {}
            body["title"] = titleText,
            body["content"] = contentText
            const response = await axios.put(`http://localhost:3000/${id}`, body)
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
                    <Note key={note.id} id={note.id} title={note.title} content={note.content} delete={deleteNote} />
                ))}
            </div>
    
};

export default App;