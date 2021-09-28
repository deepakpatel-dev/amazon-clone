import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

const Payment = () => {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h2>Checkout(<Link to="/checkout">{basket?.length} items</Link>)</h2>
                   {/* Payement Section - Delivery Address  */}
                <div className="payment__section">
                   <div className="payment__title">
                     <h3>Delivery Address</h3>
                   </div>
                   <div className="payment__address">
                      <p>{user?.email}</p>
                      <p>6/388, Bansghat</p>
                      <p>Rewa Madhya Pradesh</p>
                </div>
                </div>
                 {/* Payement Section - Review Items  */}
                <div className="payment__section">
                  <div className="payment__title">
                      <h3>Review Items & Delivery</h3>
                  </div>
                   <div className="payment__items">
                     {basket.map(item => (
                         <CheckoutProduct 
                         id={item.id}
                         title = {item.title}
                         image = {item.image}
                         price = {item.price}
                         ratimg = {item.rating}
                         />
                     ))}
                   </div>
                </div>
                {/* Payement Section - Payment Methods  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
