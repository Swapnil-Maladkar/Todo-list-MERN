import React,{useState} from 'react'
import "../Components/Todo.css"
import axios from 'axios';
const Todo = () => {
  const [task,setTask]=useState();
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add',{task:task}).then(result=>{window.location.reload()}).catch(err=>console.log(err))
    console.log('added');
  }
    
  return (
    <>
    <div className='InputFields'>
        
        <input type="text" name="" id="" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd} >Add</button>

    </div>
    </>
  )
}

export default Todo