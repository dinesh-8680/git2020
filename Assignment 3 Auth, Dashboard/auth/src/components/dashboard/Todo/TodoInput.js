import React, { useState } from 'react';
import firebase from '../../config/Fire';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };
    if(todo.title){
      todoRef.push(todo);
      setTitle("");
    }
  };
  return (
    <div>
      <input type="text"
             name="title"
             aria-label="cost-input"
              onChange={handleOnChange} 
              data-testid="element-to-focus"
               value={title} />
      <button onClick={createTodo}>Submit</button>
    </div>
  );
}