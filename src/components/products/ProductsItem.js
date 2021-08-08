import React from 'react'
import './products.css'

function ProductsItem(props) {
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product_container">
            <div className="product_img">
                <img src={img} alt={name} />
            </div>
            <div className="product_details">
                <div className="details_left">
                    <p className="heading">{name}</p>
                    <p className="author">By : {seller}</p>
                    <p className="price">Price : ${price}</p>
                    <p>only {stock} left in stock - order soon</p>
                    <button className="button" onClick={() => props.addCard(props.product)}><span>Add To Card</span></button>
                </div>
            </div>
        </div>
    )
}

export default ProductsItem;
