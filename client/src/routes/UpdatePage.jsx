import React, {useState, useEffect} from 'react';
import { useParams} from "react-router";

import RestuarantService from '../services/RestuarantService'
import AddRestuarant from '../components/AddRestuarant'


// !page to update info for restuarant
const UpdatePage = () => {
    const params = useParams()// get url params
    const [restuarant, setRestuarant] = useState('')



    useEffect(() => {
        //async fun to get restuarnat from db by url.params, directly from service 
        // TODO posibble to use store
        const getRestuarant =  async() => {
            const response = (await RestuarantService.findRestuarant(params.id)).data
            setRestuarant(response)
        };

        getRestuarant()
    }, [params.id]);


    return (
        <div>
            {/* component to create restuarant OR if data was sent it would update */}
            <AddRestuarant updateId={restuarant.id}
                           updateName={restuarant.name} 
                           updateLocation={restuarant.location}
                           updatePriceRange={restuarant.price_range}
                            />
            
        </div>
    );
}

export default UpdatePage;
