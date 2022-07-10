import { useContext } from "react"
import { useState, createContext } from "react"
 
const MainPageContext = createContext()
 
export function MainPageContextProvider({ children }) {
    const [leftSideRef, setLeftSideRef] = useState('')
 
    return (
        <MainPageContext.Provider value={{leftSideRef, setLeftSideRef}}>
            {children}  
        </MainPageContext.Provider>
    )
}
export function useMainPageContext () {
    return useContext(MainPageContext)
}