import React ,{useEffect} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import Login from './Login';
import Payment from "./Payment";
import Orders from "./Orders";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
 
const promise = loadStripe(
  'pk_test_51JewFYBvQuOsEYlXSpFNOW02GYkBuSHhO0UIVIeJn3WAwX1Gfo7npWyfFzK0JgiArLFGqHKNpZ1UbCOYOAg7RlQ600O1FLtgeK'
);

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
       //will only run once when the app component load..
       auth.onAuthStateChanged(authUser=>{
         console.log('THE USER IS >>> ',authUser)
         if(authUser){
           // user just logged in or user was logged on 
           dispatch({
             type:'SET_USER',
             user:authUser
           })
          } else {
            // the user logged out 
           dispatch({
             type: 'SET_USER',
             user: null
           })
          }
       })
  },[])
  return (
    // BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path='/orders'>
          <Header/>
          <Orders />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>
        <Route path="/"> 
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
