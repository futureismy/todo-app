import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Button} from '@material-ui/core'
import {db} from './firebase_config'
export default function TodolistItem({todo,inprogress,id}) {
    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
        alert('Change status!!')
    }
    function deleteTodos(){
        db.collection("todos").doc(id).delete();
        alert('Xóa thành công');
    }
    return (
        <div style={{display:'flex'}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In Progress 💪" : "Completed ✔️"}/>
            </ListItem>  
            <br/>
            <Button  onClick={toggleInProgress} style={{fontSize:'18px',fontWeight:'555'}}>{inprogress ? "Done" : "UnDone"}</Button>     
            <Button onClick={deleteTodos} style={{fontSize:'18px',fontWeight:'bold'}}>X</Button>        
        </div>
    )
}