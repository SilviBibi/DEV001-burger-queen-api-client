import React, {useState} from 'react'

export const Context = React.createContext({})

export default function ContextProvider({children}){
    const [add, setAdd] = useState([])

    return (
        <Context.Provider value={{add, setAdd}}>
            {children}
        </Context.Provider> 
    )
}