import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext';

function Cart() {
    const [cartContext, setCartContext] = useContext(CartContext);
    const [refresh, setrefresh] = useState(1)
    console.log(cartContext);
    if(cartContext.length > 0){
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    
                    {
                        cartContext.map((obj,index)=>{
                            console.log(obj);
                            return(
                                <div className="col mt-5">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={obj.image} className="darkmode-ignore image card-img-top p-3"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.title}</h5>
                                            <p className="card-text line-clamp">{obj.description}</p>
                                            <a className="btn btn-danger" onClick={()=>{

                                                const array = cartContext;


                                                const index = array.indexOf(obj);
                                                if (index > -1) {
                                                array.splice(index, 1);
                                                }
                                                var newcart = array
                                                setCartContext(newcart)
                                                setrefresh(refresh + 1)
                                            }}>Remove</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
    
                </div>
            </div>
        )
    }else{
        return(
            <p class="h1 text-center mt-5 pt-5">Cart is empty</p>
        )
    }
        


}

export default Cart