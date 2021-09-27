import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id,image,title,price,rating}) => {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = ()=>{
        //Remove the item from basket 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="chekcoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=>(
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>

        
    )
}

export default CheckoutProduct;
