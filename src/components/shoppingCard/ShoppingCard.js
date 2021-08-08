import React from 'react'
import ProductsItem from '../products/ProductsItem';
import './shoppingcard.css'

function ShoppingCard(props) {
    const card = props.cardList
    // const totalPrice = card.reduce((total, product) => total + product.price, 0);
    // const total = Math.round(totalPrice)
    //Add Total 
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price;
    }
    //Add Shipping 
    let shipping = 0;
    if (total > 350) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.5
    }
    else if (total > 0) {
        shipping = 0;
    }

    //Add Tax 
    const tax = total / 10;
    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision);
    }
    return (
        <div className="shop_card">
            <h3>Order Summary</h3>
            <p>Items ordered: {card.length} </p>
            <table className="customers">
                <tr>
                    <td>Items</td>
                    <td>$ {formateNumber(total)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling :</td>
                    <td> $ {formateNumber(shipping)}</td>
                </tr>
                <tr>
                    <td>Total tax : </td>
                    <td>$ {formateNumber(tax)}</td>
                </tr>
                <tr className="total_price">
                    <td>Order Total:</td>
                    <td>${formateNumber(total + shipping + tax)}</td>
                </tr>
            </table>
        </div>
    )
}

export default ShoppingCard;
