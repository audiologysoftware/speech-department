import { createContext, useState } from "react";


const PositionContext = createContext()

export const RouteContextProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const updateCurrentPosition  = (pageNo) =>{
        setCurrentPage(pageNo);
    }

    const Page = {
        current : currentPage,
        updateCurrentPage : updateCurrentPosition
    }

    return(
        <PositionContext.Provider value = {Page}>
            {children}
        </PositionContext.Provider>
    )
}

export default PositionContext;