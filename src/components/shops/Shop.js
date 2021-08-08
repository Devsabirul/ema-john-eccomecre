import React, { useState } from 'react'
import './shop.css'
import fakeData from '../../data/fakeData'
import ProductsItem from '../products/ProductsItem'
import ShoppingCard from '../shoppingCard/ShoppingCard'

function Shop() {

    const first10Data = fakeData.slice(0, 10);
    const [products, setproducts] = useState(first10Data)
    const [Card, setCard] = useState([])
    
    const addCard = (products) => {
        const newCard = [...Card, products]
        setCard(newCard)
        console.log(newCard);
    }
    return (
        <div className="container">
            <div className="products">
                {
                    products.map(products => <ProductsItem
                        product={products}
                        addCard={addCard}
                    />)
                }
            </div>
            <div className="card">
                <ShoppingCard cardList={Card} />
            </div>
        </div>
    )
}

export default Shop;
