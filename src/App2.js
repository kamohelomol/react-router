import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
import './App.css';
import './components/CSS/style.css';
import {useState, useEffect} from 'react';
// import { BrowserRouter, Route, Routes  } from 'react-router-dom';   // curly brackets is for lot of things you need to export



function App() {
  const [isCompletedScreen, setIsCompleteScreen] = useState(false)
  const [allTodos, setTodos] =useState([])
const [newTitle, setNewTitle] = useState("")
const [ newDescription, setNewDescription] = useState("")
const [completedTodos, setCompletedTodos] = useState([]);

const handleNewTitle = (e) =>{
  setNewTitle(e.target.value);
}

const handleNewDescription = (e) => {
  setNewDescription(e.target.value);
}

const handleAddTodo = ( ) => {
let newTodoItem = {
  title: newTitle,
 description: newDescription,
}

let updatedTodobar = [...allTodos];
updatedTodobar.push(newTodoItem);
setTodos(updatedTodobar);
localStorage.setItem('todolist', JSON.stringify(updatedTodobar))

}


//delete functionality 
const handleDeleteTodo = (index) => {
  let updatedTodobar = [...allTodos];
  updatedTodobar.splice(index, 1);
  setTodos(updatedTodobar);
  localStorage.setItem('todolist' , JSON.stringify(updatedTodobar));

};



// FUNCTION TO HANDLE TASK COMPLETED 
//function to handle task completed 
const handleCompletedTodo= (index) => {
  let now= new Date();
  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  let yyyy = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second= now.getSeconds();
let completedOn =
dd + '-' + mm + '-' + yyyy + 'at' + hour + ':' + minute + ':' + second ;



// function to create a new task object of the task completed 
let filteredItem = {
  ...allTodos[index],
  completedOn: completedOn
};


let updatedCompletedArr = [...completedTodos];
updatedCompletedArr.push(filteredItem);
setCompletedTodos(updatedCompletedArr);
handleDeleteTodo(index);
localStorage.setItem('completedTodos' , JSON.stringify(updatedCompletedArr))

};





useEffect(() => {
  let saveTodo = JSON.parse(localStorage.getItem('todolist'));

if (saveTodo){
  setTodos(saveTodo);
}

// function to fetch completed task from localstorage
let savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
if (savedCompletedTodos) {
  setCompletedTodos(savedCompletedTodos);
}
}
,[]
);

// functuon that wil handle action to delete in completed task
const handleDeleteCompletedTodo =(index) => {
  let updatedCompletedArr= [...completedTodos];
  updatedCompletedArr.splice(index, 1);
  setCompletedTodos(updatedCompletedArr);
  localStorage.setItem('completedTodos' , JSON.stringify(updatedCompletedArr));

};


  return (
    <>
<h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' name='title' onChange={handleNewTitle} value={newTitle} placeholder="What is the  task title?" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' name='title' onChange={handleNewDescription} value={newDescription} placeholder="What's the task description?" />
          </div>

          <div className='todo-input-item'>
            <button type='button'  onClick={handleAddTodo} className='primaryBtn' >Add</button>
          </div>
        </div>


      <div className='btn-area'>
       <button className={`secondaryBtn ${isCompletedScreen===false && 'active'}`} onClick={() => setIsCompleteScreen(false)} >Todo</button>
       <button className={`secondaryBtn ${isCompletedScreen===true  && 'active'}`} onClick={() => setIsCompleteScreen(true )} >Completed </button>
      </div>


{ isCompletedScreen === false && allTodos.map((item, index) =>{
  
  return(    
    <div className='todo-list'  key={index} >
  
    <div className='todo-list-item'> 
  
    <h3> {item.title}</h3>
  
    <p> {item.description}</p>
  
    </div>
  
    <div className='icons'>
     < AiOutlineDelete className='icon' title='Delete' onClick={() => handleDeleteCompletedTodo(index)} />
  
     < BsCheckLg className='check-icon'title='Complete' onClick={() => handleCompletedTodo(index)}/>

    </div>
  </div>
  
  )
    })}
  



{isCompletedScreen === true && completedTodos.map((item, index) =>{
  
  return(    
    <div className='todo-list'  key={index} >
  
    <div className='todo-list-item'> 
  
    <h3> {item.title}</h3>
  
    <p> {item.description}</p>
  <p> <small> completed on: {item.completedOn} </small></p> 
    </div>
  
    <div className='icons'>
     < AiOutlineDelete className='icon' title='Delete' onClick={() => handleDeleteCompletedTodo(index)} />
  
    

    </div>
  </div>
  
  )
    })}

    
   
      </div>
 
    </>
  );
}

export default App;
