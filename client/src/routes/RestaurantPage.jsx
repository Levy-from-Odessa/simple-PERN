import React, {useState, useEffect} from 'react';
import { useParams, useHistory} from "react-router";

import RestuarantService from '../services/RestuarantService'
import Loader from '../UI/Loader/Loader';

// !page of restuarant
const RestaurantPage = () => {
    const params = useParams();//get url params
    const history = useHistory()//to push into url (instead <Link/>) 
    const [restuarant, setRestuarant] = useState(''); //restuarant info
    const [loading, setLoading] = useState(true) 


    useEffect(() => {
        //async fun to get restuarnat from db by url.params, directly from service 
        // TODO posibble to use store
        const getRestuarant =  async() => {
            setLoading(true)
            const response = (await RestuarantService.findRestuarant(params.id)).data
            setRestuarant(response)
            setLoading(false)
        };
        //call the fun 
        getRestuarant()
    }, [params.id]);

    const main ={
        margin: "50px auto",
        background: "#fafafa",
        borderRadius:'5px',
        border: '1px solid #eee',
        padding: '20px',
        width: '300px',
        textAlign:'center'

    }


    return (
        <div style={main}>
            {loading
                ? <Loader/>
                
                :    
                    <>
                        <h1>Restaurant {restuarant.name}</h1>
                        <h2>{'$'.repeat(restuarant.price_range)}</h2>
                        <p>{restuarant.id}, {restuarant.location}</p>
                    </>
                }
                
            <button onClick={() => history.push('/')}>
                Back
            </button>
        </div>
    );
}

export default RestaurantPage;
