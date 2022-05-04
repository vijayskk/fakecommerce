import { Alert, Snackbar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';

function Home() {
    const [data, setdata] = useState([])
    const [gotdata, setGotdata] = useState(false)
    const [cartContext, setCartContext] = useContext(CartContext);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                setdata(json)
                setGotdata(true)
            })
    }, [])
    if (gotdata) {
        return (
            <div className="container">
                <h1 className='h1 text-center mt-5 pt-5'>Recommended for you</h1>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={data[0].image} class="w-80 mx-auto darkmode-ignore image d-block img-fluid img-thumbnail" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={data[0].image}  class="w-80 mx-auto darkmode-ignore image d-block img-fluid img-thumbnail" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={data[0].image}  class="w-80 mx-auto darkmode-ignore image d-block img-fluid img-thumbnail" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon text-black" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">

                    {
                        data.map((obj, index) => {
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
        )

    } else {
        return (
            <div className='flex items-center justify-center h-full pt-5'>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Home