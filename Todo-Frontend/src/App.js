import './App.css';
import { useEffect, useState } from 'react';
import Todo from './Components/Todo';
import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios'
function App() {
  const [todos,setTodos]= useState([]);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id).then(result=>{window.location.reload()}).catch(err=>console.log(err))
  }

  const handleEdit = (id)=>{
    axios.put('http://localhost:3001/update/'+id).then(result=>{window.location.reload()}).catch(err=>console.log(err))

  }

  useEffect(()=>{
    axios.get('http://localhost:3001/get').then(result=>{setTodos(result.data)}).catch(err=>console.log(err))
    console.log(todos);
  },[])
  return (
    <>
      <h2 >ToDo List</h2>
      <Todo/>
      <div className='container'>


      {
        todos.length===0?
        <div className='tasks'><p>No Tasks</p></div>
        :
        todos.map(todo=>(
          <div className='tasks'>
            <input type='checkbox' checked={todo.done}onClick={()=>handleEdit(todo._id)}></input>
            
            <p className={todo.done===true?'linethrough':''}>
            {todo.task}
            </p>
            <MdOutlineDelete className='trash' onClick={()=>handleDelete(todo._id)}/>
            
            </div>
        )
        
      )
    }
    </div>
    </>
  );
}

export default App;
