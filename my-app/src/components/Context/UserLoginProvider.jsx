import React from 'react'
import {UserLoginProvider} from './UserLoginProvider'

const UserLoginProvider = ({children}) => {
     const[user, setUser] = useState(null)  
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserLoginProvider

