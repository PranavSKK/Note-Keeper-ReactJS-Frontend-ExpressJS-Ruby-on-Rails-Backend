import express from "express";
import Note from "../models/notes.model.js";

const noteRouter = express.Router()

noteRouter.get("/get_notes", async (req,res)=>{
    const notes = await Note.find()
    console.log(notes                                                       )
    res.json(notes)
});

noteRouter.post("/add_note", async(req,res)=>{
    const body = req.body
    const note = new Note()
    note["title"] = body.title,
    note["content"] = body.content
    const saveNote = await note.save()
    if(saveNote){
        res.json(saveNote)
    }else{
        console.log("Note Add Errors")
    }
});

noteRouter.delete("/delete_note/:id", async(req,res)=>{
    const id = req.params.id
    const deleteNote = await Note.findByIdAndDelete(id);
    if(deleteNote){
        res.json("Note deleted successfully")
    }else{
        console.log("Note Delete Error")
    }
});

export default noteRouter;