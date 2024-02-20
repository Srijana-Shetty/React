/*import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
class App extends Component {
    render(){
        return(
            <>
            <div className='App'>
                <Greet />
                <Welcome/>
                
            </div>
            <Navbar title="Memories"/>
            </>
            
            
        )
    }
}

export default App;*/

import UserGreeting from "./components/UserGreeting";





// useState
/*import React, { useState } from 'react'



function App() {
    
       const [count, setCount] = useState(4)
       const [theme, setTheme] = useState('blue')
     
function decrementCount(){
    setCount(prevState => prevState -1)
   
    /*setState(prevState => {
        return {count: prevState.count - 1}
    })*/

/*}
    function incrementCount(){
      setCount(prevState => prevState +1)
      setTheme('red')
      }
    
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
  }
  
export default App  */




//useEffect
/*
import React, {useState, useEffect} from 'react'

export default function App(){
  const[resourceType, setResourceType] = useState('posts')

  console.log('render')

  useEffect(() => {
    console.log('onMount')
  }, [resourceType])

  return(
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
  
}

*/

/*import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
*/




// UseRef

/*import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const renderCount =useRef(5)

  useEffect(()=>{
    renderCount.current = renderCount.current + 1
  })
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div> I rendered{renderCount.current} times</div>
    </>
  )
}  */


//context 

/*import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return(
    <>
    <ThemeContext.Provider value={darkTheme}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <FunctionContextComponent/>
    <ClassContextComponent/>
    </ThemeContext.Provider>

    </>
  )
} */


//useReducer
/*import React,{useState, useReducer} from "react";

const ACTIONS = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement'
}

function reducer(state, action){

  switch (action.type) {
    case ACTIONS.INCREMENT :
      return { count: state.count + 1 }
      case ACTIONS.DECREMENT :
        return {count: state.count - 1}
        default:
          return state
  }
    
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, {count:0})  //count is a object thats why we are passing in the array , state
  

  function increment(){
    dispatch({type: ACTIONS.INCREMENT})
  }

  function decrement(){
    dispatch({type: ACTIONS.DECREMENT})
   // setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <buttton onClick={decrement}>-</buttton>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>
  )
} */

//useReducer hook for todo

/*import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO : 'add-todo' ,
  TOGGLE_TODO : 'toggle-todo'
}

function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
          return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
  }
}
function newTodo(name){
  return {
    id : Date.now(), 
    name: name,
     complete: false
    }
}
     

export default function App() {
  const[todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  
  function handleSubmit (e){
    e.preventDefault()          // prevents our page refreshing
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name : name}})  // payload is 
    setName('')
  }

  console.log(todos)

  return (
   <>
     <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
     </form>
     {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
     })}
   </>
  )
} */

// conditional rendering 
/* import React, { Component, useReducer } from "react";
 import UserGreeting from "./components/UserGreeting";
 
 class App extends Component{
     render(){
      return (
        <div className="App">
            <UserGreeting />
        </div>
      )
     }
}
*/

/*
import './App.css'
import React, { useState } from 'react'
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from './Context/LoginContext';

export default function App() {
  const [showProfile, setShowProfile]=useState(false);
  const [username, setUsername] = useState('')
  
  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUsername} } >
        {showProfile ? <Profile/> : <Login/> }
      </LoginContext.Provider>
      
    </div>
  )
}

*/

/*import React, { useReducer } from 'react';


const reducer =(state, action) => {
  switch (action.type){
    case "INCREMENT":
      return {count: state.count +1, showText: state.showText}
  case "toggleshowText":
    return { count:state.count, showText: !state.showText}
    }
}
const App = () => {

    const[state, dispatch] = useReducer(reducer,{count: 0, showText:true});

    
   // const [count, setCount] = useState(0)
    //const [showText,setShowText] = useState(true)

    return (
        <div>
            <h1>{count}</h1>
            <button
            onClick={() =>{
                setCount(count +1);
                setShowText(!showText);
            }}
            >
                click here
            </button>

            {showText && <p>This is a text</p>}
            
        </div>
    )
}

export default App */


import React, { useContext, useState } from 'react'
import {createContext } from 'react'
import Navbar1 from "./components/Navbar1";
import { Link } from "./components/Link";
import { LinkContainer } from "./components/LoginContainer";
import {UserLoginProvider} from './context/UserLoginProvider'


function App() {
  const[name , setName] = useState("test");
  const loggedOut =() =>{
    setName("")
  }
  const {setUser} = useContext()
  setUser({name, loggedOut})
  return (
    <UserLoginProvider>
      <Navbar1 name={name} loggedOut={loggedOut} />
    <Link />
    
    </UserLoginProvider>
    

  )
}

export default App