import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
           <div   className="home__container">
                  <img className="home__image"
                  src="https://m.media-amazon.com/images/I/61bH1sP5DGL._SX1500_.jpg" alt=""/>
            </div> 
            <div className="home__row">
                 <Product 
                 id="123123123"
                 title="The lean Startup"
                 price={999}
                 image="lean-startup.jpg"
                 rating={5}
                 />
                 <Product 
                 id="123123123"
                 title="True Wireless Earbuds"
                 price={1299}
                 image="https://m.media-amazon.com/images/I/71gtHnQGfQL._AC_UL640_FMwebp_QL65_.jpg"
                 rating={3}
                 />
                 
            </div>
            <div className="home__row">
                 <Product 
                 id="123123123"
                 title="Funny T Shirt for Men"
                 price={99}
                 image="https://m.media-amazon.com/images/I/61AO6QebO5L._AC_UL640_FMwebp_QL65_.jpg"
                 rating={2}
                 />
                 <Product 
                 id="123123123"
                 title="Paint Brushes Set"
                 price={1299}
                 image="https://m.media-amazon.com/images/I/81ON4-sLO0L._AC_UL640_FMwebp_QL65_.jpg"
                 rating={3}
                 />
                 <Product 
                 id="123123123"
                 title="Canon-All in One Printer"
                 price={1299}
                 image="https://m.media-amazon.com/images/I/81BJDjwDjVL._AC_UL640_FMwebp_QL65_.jpg"
                 rating={4}
                 />
            </div>
            <div className="home__row">
                 <Product 
                 id="123123123"
                 title="Sony X80J 65 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD65X80J- 2021 Model"
                 price={1299}
                 image="https://m.media-amazon.com/images/I/91RfzivKmwL._AC_UL640_FMwebp_QL65_.jpg"
                 rating={5}
                 />
            </div>
            
        </div>
    )
}

export default Home
