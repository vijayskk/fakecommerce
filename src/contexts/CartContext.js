
  
import React ,{useState,createContext} from 'react'

export const CartContext = createContext()

export const CartContextProvider = (props)=>{
    const [cartContext, setCartContext] = useState([]);
    return(
        <CartContext.Provider value={[cartContext, setCartContext]}>
            {props.children}
        </CartContext.Provider>
    )
}