import './App.css';
import { TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { useEffect, useState } from 'react';
import firebase from 'firebase'
import { db } from './firebase_config';
import TodolistItem from './TodolistItem'
import Dashboard from './modal/dashboard';
function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInPut] = useState('')

  useEffect(() => {
    getTodos()
  }, [])

  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        })
        )
      )
    })
    
  }
  function addTodo(e) {
    e.preventDefault()
    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })
    alert('Thêm thành công');
  }
  return (
    <div className="App">
      <div>
       <h1 className='textTMP'>Trần Minh Phú  <span style={{color:'black'}}>Todo's App</span>   🕒</h1>  
        <form >
          <TextField id="standard-basic" label="Write a todo"
            onChange={(e) => setTodoInPut(e.target.value)}
            style={{ maxWidth: '500px', width: '90vw', marginTop: '24px' }}
            value={todoInput}
          />
          <Button variant="contained" type='submit' onClick={addTodo} style={{ display: 'none' }}>Add Todo</Button>
        </form>
        {todos.map((todo, index) => {
          return <TodolistItem key={index}
            todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
        })}
      </div>
        <Dashboard />
    </div>
  );
}

export default App;
