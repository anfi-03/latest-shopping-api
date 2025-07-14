import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewProduct = () => {
    const [prname, xprname] = useState( 
        {"products":[]}
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/products").then(
            (res) => {
                xprname(res.data)
            }
        ).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            {prname.products.map((value, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                        <div className="card h-100">
                                            <img src={value.images[0]} className="card-img-top" alt={value.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">ID: {value.id}</h6>
                                                <p className="card-text">Category: {value.category}</p>
                                                <p className="card-text">{value.description}</p>
                                                <p className="card-text">Brand: {value.brand}</p>
                                                <p className="card-text">$ {value.price}</p>
                                                <p className="card-text">Discount: {value.discountPercentage}</p>
                                                <p className="card-text">Rating: {value.rating}★  Stock: {value.stock}</p>
                                                <p className="card-text">Weight: {value.weight} Kg</p>
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
