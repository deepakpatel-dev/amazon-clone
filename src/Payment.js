import {CardElement ,useStripe, useElements } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react';
import { Link , useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import './Payment.css';
import {db} from './firebase';

const Payment = () => {
    const [{basket,user}, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing , setProcessing] = useState("");
    const [error , setError ] = useState(null);
    const [disabled ,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () =>{
          const response = await axios ({
             method :'post',
             //Stripe expects the total in a currencies subunits
             url:`/payments/create?total=${getBasketTotal(basket)* 100 }`
        })
        setClientSecret(response.data.clientSecret)
    }
        getClientSecret();
    }, [basket])
    
    

    const handleSubmit = async (event) => {
     // Do all the fancy stripe stuff...
     event.preventDefault();
     setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret,{
         payment_method:{
             card:elements.getElement((CardElement))
         }
     }).then(({ paymentIntent })=>{
         //paymentIntent = payment confirmation
         db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
         .set({
             basket:basket,
             amount: paymentIntent.amount,
             created:paymentIntent.created
         })

         setSucceeded(true)
         setError(null)
         setProcessing(false)
        
        dispatch({
            type:'EMPTY_BASKET'
        });
         history.replace('/orders')
     })

    }
    const handleChange = (event)=> {
      // Listen for changes in CardElement
      //and display any error as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message:"");
    } 
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__pricecontainer">
                            <CurrencyFormat
                               renderText={(value)=>(
                                    <>
                                    <p>
                                    {/* Subtotal({basket.length} items): */}
                                    <strong>Order Total {value}</strong>
                                    </p>
                                    {/* <small className="subtotal__gift">
                                        <input type="checkbox" /> This order contains gift
                                    </small> */}
                                    </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rs."}
                                        /> 
                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing ? <p>Processing</p> :"Buy Now" }</span>
                                        </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
