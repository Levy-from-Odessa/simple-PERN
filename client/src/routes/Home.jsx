import React from 'react';

import AddRestuarant from '../components/AddRestuarant';
import RestaurantList from '../components/RestaurantList';


// !home page 

const Home = () => {
    return (
        <div>
           
            <AddRestuarant/>
            <RestaurantList/>
        </div>
    );
}

export default Home;
