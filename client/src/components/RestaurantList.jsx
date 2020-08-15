import React from 'react';
import {useSelector} from 'react-redux'
import {useFetching} from '../Hooks/useFetching'

import {fenchRestuarants} from '../reducers/restuarant/restuarantActions'

import RestuarantRow from './RestuarantRow';
import Loader from '../UI/Loader/Loader'
import Error from '../UI/Error';

// component to show all restuarant and give ability to manipulate them
const RestaurantList = () => {
    //get data from store by using useSelector
    const {restuarants, error, loading} = useSelector(state => state.restuarantReducer)
   

    // hook that update restuarants list if it nessecary  
    useFetching(fenchRestuarants)
   
   
    return (
        <div style={{textAlign: 'center'}}>
            
             {loading 
                ? <Loader/> 
                : <table style={{borderRadius: '10px'}} className="table table-hover table-dark">
                <thead >
                    <tr className="bg-primary">
                        <th scope="col">Restuarants</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range </th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                  
                    <RestuarantRow restuarants={restuarants}/>
                </tbody>
                </table>
            }
            {<Error error={error}/>}
            
        </div>
    );
}

export default RestaurantList;
