import React, { useState, useContext } from 'react'
import { LoginContext } from '../Context/LoginContext';
export function Login() {
    const {setUsername} = useContext(LoginContext);
  return (
    <>
      <input 
      type="text"
      placeholder="Username.."
      onChange={(event) => {
        setUsername(event.target.value);
      }}
      />
      <input
      type="text"
      placeholder='Password...'/>
      <button>
        Login
        </button>
      

    </>
  )
}

