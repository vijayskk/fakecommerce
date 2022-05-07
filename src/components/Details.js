import { Alert, Snackbar } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UsageContext } from '../contexts/UsageTrackerContext';


function Details() {
    const [data, setdata] = useState([])
    const [cats, setcats] = useState([])
    const [gotdata, setgotdata] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [usageContext, setUsageContext] = useContext(UsageContext);
    const navigate = useNavigate();
    const goHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [cartContext, setCartContext] = useContext(CartContext);
    useEffect(()=>{
        var url_string = window.location.href
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setdata(json)
                setgotdata(true)
                setUsageContext([...usageContext,json])


                fetch(`https://fakestoreapi.com/products/category/${json.category}`)
                .then(res=>res.json())
                .then(json=>{

                    setcats(json)
                })
            })
        

    },[])
    if(gotdata){



        return (
            <>
                <section id="services" class="services section-bg">
                    <div class="container-fluid">
                        <div class="row row-sm">
                            <div class="col-md-6 _boxzoom flex items-center justify-center">
                                <img class="darkmode-ignore image" src={data.image} width={400} alt="" />
                            </div>
                            <div class="col-md-6">
                                <div class="_product-detail-content">
                                    <p class="_p-name">{data.title}</p>
                                    <div class="_p-price-box">
                                        <div class="p-list">
                                            <span> M.R.P. : <i class="fa fa-inr"></i> <del> {(data.price * 10) +142}  </del>   </span>
                                            <span class="price"> Rs. {data.price * 10} </span>
                                        </div>
                                        <div class="_p-features">
                                            <span> Description About this product:- </span>{data.description}</div>
                                            
                                            <div class="_p-qty-and-cart mt-5">
                                                <div class="_p-add-cart">
                                                    <button class="btn-theme btn buy-btn">
                                                        <i class="fa fa-shopping-cart"></i> Buy Now
                                                    </button>
                                                    <button class="btn-theme btn btn-success" onClick={()=>{
                                                        setCartContext([...cartContext,data])
                                                        handleClick()
                                                        goHome()
                                                    }}>
                                                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                                    </button>
                                                    <Snackbar
                                                color='success'
                                                open={open}
                                                autoHideDuration={6000}
                                                onClose={handleClose}
                                                message="Item added to cart"
                                            >
                                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} >
                                                    Item added to cart!
                                                </Alert>
                                            </Snackbar>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                <p class="h1 mt-5 pt-5">Other Products</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    
                    {
                        cats.map((obj,index)=>{
                            console.log(obj);
                            return (
                                <div className="col mt-5">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={obj.image} className="darkmode-ignore image card-img-top p-3" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.title}</h5>
                                            <p className="card-text line-clamp">{obj.description}</p>
                                            <Link to={"/details?id=" + (index + 1)} className="btn btn-primary">Take this</Link>
                                            <button class="btn-theme btn btn-success ml-5" onClick={() => {
                                                setCartContext([...cartContext, obj])
                                                handleClick()
                                            }}>
                                                <i class="fa fa-shopping-cart"></i> Add to Cart
                                            </button>
                                            <Snackbar
                                                color='success'
                                                open={open}
                                                autoHideDuration={6000}
                                                onClose={handleClose}
                                                message="Item added to cart"
                                            >
                                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                    Item added to cart!
                                                </Alert>
                                            </Snackbar>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
    
                </div>
            </div>
    
            </>
        )
    }else{
        return(
            <div className='flex items-center justify-center h-full pt-5'>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Details