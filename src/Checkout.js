import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt=""/>
            </div>
            <div >
                <h2 className="checkout__title">Your Shopping Basket</h2>
            </div> 
            <div className="checkout__right">
            <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
