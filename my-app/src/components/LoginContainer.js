import React from 'react'

export const LoginContainer = () => {
  const {user}= useContext()
  if(!user){
    return <p>user logged out</p>
  }
  return (
    <div>
      <h1>Hello : {user.username}</h1>
      <button onClick={() => user.loggedOut}></button>
    </div>
  )
}
