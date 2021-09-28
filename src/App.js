import React ,{useEffect} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import Login from './Login';
import Payment from "./Payment";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";


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
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Payment />
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
