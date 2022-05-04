import React ,{useState,createContext} from 'react'

export const UsageContext = createContext()

export const UsageContextProvider = (props)=>{
    const [usageContext, setUsageContext] = useState([]);
    return(
        <UsageContext.Provider value={[usageContext, setUsageContext]}>
            {props.children}
        </UsageContext.Provider>
    )
}