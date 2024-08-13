import React , { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null);

    <UserContext.Provider value={{setUser}}>
        
        {children}
        
    </UserContext.Provider>
} 


export default UserContextProvider;